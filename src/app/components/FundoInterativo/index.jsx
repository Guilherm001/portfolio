import React, { useEffect, useRef, useCallback } from 'react';

// Componente para o Fundo Animado com Rede de Dados Etérea (CSS Comum)
const AnimatedBackground = () => {
  const mountRef = useRef(null); // Ref para o elemento DOM onde o canvas será montado
  const mouse = useRef({ x: 0, y: 0 }); // Ref para a posição do mouse (normalizada)

  // A função animate foi envolvida em useCallback para otimização
  const animate = useCallback((scene, camera, renderer, particlesGroup, lines) => {
    const particleFlowSpeed = 0.00005; // Velocidade de movimento sutil das partículas
    const mouseInfluenceStrength = 0.02; // Força da influência do mouse no movimento das partículas
    const maxConnectionDistance = 200; // Distância máxima para conectar partículas com linhas
    const mouseLineInfluenceRadius = 300; // Raio de influência do mouse para a opacidade das linhas
    const lineOpacityBoost = 0.6; // Quanto a opacidade da linha aumenta perto do mouse (ligeiramente mais forte)
    const rotationSpeed = 0.001; // Velocidade de rotação sutil para os cubos

    // Normalizar a posição do mouse para as coordenadas da cena
    const mouseXWorld = mouse.current.x * (renderer.domElement.clientWidth / 2);
    const mouseYWorld = mouse.current.y * (renderer.domElement.clientHeight / 2);
    const mouseVector = new window.THREE.Vector3(mouseXWorld, mouseYWorld, camera.position.z);


    // Animação das partículas
    particlesGroup.children.forEach(p => {
      // Movimento de fluxo contínuo e sutil
      p.position.x += Math.sin(Date.now() * particleFlowSpeed + p.originalIndex) * 0.5;
      p.position.y += Math.cos(Date.now() * particleFlowSpeed + p.originalIndex) * 0.5;

      // Aplica rotação sutil para os cubos
      p.rotation.x += rotationSpeed;
      p.rotation.y += rotationSpeed;
      p.rotation.z += rotationSpeed * 0.5;

      // Movimento em direção ao target (influenciado pelo mouse)
      const targetXAdjusted = p.originalX + mouse.current.x * 70; // Ajuste para a intensidade da influência
      const targetYAdjusted = p.originalY + mouse.current.y * 70;

      p.position.x += (targetXAdjusted - p.position.x) * mouseInfluenceStrength;
      p.position.y += (targetYAdjusted - p.position.y) * mouseInfluenceStrength;

      // Faz as partículas brilharem/pulsarem sutilmente
      p.material.opacity = 0.5 + Math.sin(Date.now() * 0.0003 + p.originalIndex) * 0.2; // Opacidade base
    });

    // Atualiza as linhas entre as partículas
    let lineIndex = 0;
    for (let i = 0; i < particlesGroup.children.length; i++) {
      for (let j = i + 1; j < particlesGroup.children.length; j++) {
        const p1 = particlesGroup.children[i];
        const p2 = particlesGroup.children[j];
        const distance = p1.position.distanceTo(p2.position);

        const line = lines[lineIndex];

        if (distance < maxConnectionDistance) {
          // Calcula a opacidade da linha baseada na distância entre as partículas
          let currentLineOpacity = (1 - distance / maxConnectionDistance) * 0.1; // Opacidade base um pouco mais alta

          // Calcula a distância do ponto médio da linha ao mouse
          const midPoint = new window.THREE.Vector3().lerpVectors(p1.position, p2.position, 0.5);
          const distanceToMouseMid = midPoint.distanceTo(mouseVector);
          
          // Aumenta a opacidade se a linha estiver perto do mouse
          if (distanceToMouseMid < mouseLineInfluenceRadius) {
            currentLineOpacity += (1 - distanceToMouseMid / mouseLineInfluenceRadius) * lineOpacityBoost;
            currentLineOpacity = Math.min(currentLineOpacity, 0.9); // Limita a opacidade máxima
          }

          line.geometry.attributes.position.setXYZ(0, p1.position.x, p1.position.y, p1.position.z);
          line.geometry.attributes.position.setXYZ(1, p2.position.x, p2.position.y, p2.position.z);
          line.material.opacity = currentLineOpacity;
          line.material.needsUpdate = true;
          line.geometry.attributes.position.needsUpdate = true;
          line.visible = true;
        } else {
          line.visible = false; // Torna a linha invisível se estiver muito longe
        }
        lineIndex++;
      }
    }

    // Movimento sutil da câmera para efeito parallax
    camera.position.x += (mouse.current.x * 20 - camera.position.x) * 0.05;
    camera.position.y += (-mouse.current.y * 20 - camera.position.y) * 0.05;
    camera.lookAt(scene.position); // Mantém a câmera olhando para o centro da cena

    renderer.render(scene, camera); // Renderiza a cena
    requestAnimationFrame(() => animate(scene, camera, renderer, particlesGroup, lines)); // Chama a próxima iteração
  }, []);

  useEffect(() => {
    // Garante que Three.js seja carregado e acessível globalmente
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    
    script.onload = () => {
      // Verifica se o elemento de montagem e a biblioteca Three.js estão disponíveis
      if (mountRef.current && window.THREE) {
        const THREE = window.THREE; // Atribui THREE para fácil acesso

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Configuração da cena, câmera e renderizador
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1200); // Ajustado para cobrir mais espaço
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        camera.position.z = 400; // Posição inicial da câmera

        // Criação das partículas de luz (agora cubos/blocos de dados)
        const particlesGroup = new THREE.Group();
        const particleCount = 150; // Aumentado para uma rede mais densa
        const particleGeometry = new THREE.BoxGeometry(8, 8, 8); // Cubos pequenos (era SphereGeometry)
        // Cores em tons de azul e ciano que você gostou
        const nodeColors = [0x87CEEB, 0xADD8E6, 0x40E0D0]; // SkyBlue, LightBlue, Turquoise (tons claros)

        for (let i = 0; i < particleCount; i++) {
          const color = nodeColors[Math.floor(Math.random() * nodeColors.length)];
          const particleMaterial = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.7 });
          const particle = new THREE.Mesh(particleGeometry, particleMaterial);
          
          // Posiciona em um volume 3D maior para um efeito de rede expansivo
          particle.position.x = (Math.random() - 0.5) * 1200;
          particle.position.y = (Math.random() - 0.5) * 1200;
          particle.position.z = (Math.random() - 0.5) * 1200;

          particle.originalX = particle.position.x; // Guardar original para movimento sutil e mouse
          particle.originalY = particle.position.y;
          particle.originalZ = particle.position.z;
          
          particle.targetX = particle.position.x; // Alvos para interatividade do mouse
          particle.targetY = particle.position.y;
          particle.targetZ = particle.position.z;
          particle.originalIndex = i; // Para variar animações

          particlesGroup.add(particle);
        }
        scene.add(particlesGroup);

        // Criação das linhas (pré-alocadas para performance)
        const lines = [];
        // Cor da linha: Um tom de azul ligeiramente mais escuro, mas ainda claro
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x66CCFF, transparent: true, opacity: 0.08 }); // Opacidade inicial um pouco maior

        // O número máximo de linhas possíveis entre N partículas é N*(N-1)/2
        const maxPossibleLines = particleCount * (particleCount - 1) / 2;
        for (let i = 0; i < maxPossibleLines; i++) {
          const geometry = new THREE.BufferGeometry();
          const positions = new Float32Array(2 * 3); // 2 vértices, 3 coordenadas por vértice
          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          const line = new THREE.Line(geometry, lineMaterial);
          line.visible = false; // Inicia invisível
          lines.push(line);
          scene.add(line);
        }


        // Handler para o movimento do mouse
        const onMouseMove = (event) => {
          // Normaliza as coordenadas do mouse para o intervalo [-1, 1]
          mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        // Handler para redimensionamento da janela
        const onWindowResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        // Adiciona os event listeners
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', onWindowResize);

        // Inicia o loop de animação
        animate(scene, camera, renderer, particlesGroup, lines);

        // Função de limpeza ao desmontar o componente
        return () => {
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('resize', onWindowResize);
          if (mountRef.current && renderer.domElement) {
            mountRef.current.removeChild(renderer.domElement);
          }
          renderer.dispose();
          particleGeometry.dispose();
          lineMaterial.dispose(); 
          // Dispose de todos os objetos na cena para evitar vazamento de memória
          scene.traverse((object) => {
            if (object.isMesh || object.isLine) {
              if (object.geometry) object.geometry.dispose();
              if (object.material && !object.material.isLineBasicMaterial) { // Não dê dispose do material compartilhado duas vezes
                object.material.dispose();
              }
            }
          });
          console.log("Recursos Three.js liberados para rede de dados etérea.");
        };
      } else {
        console.error("Erro: mountRef.current ou window.THREE não disponível. Certifique-se de que o Three.js está carregado.");
      }
    };

    // Adiciona o script Three.js ao cabeçalho do documento
    document.head.appendChild(script);

    // No caso de Three.js já estiver carregado (por exemplo, em atualizações de hot reload em ambiente de desenvolvimento)
    if (window.THREE && mountRef.current) {
        script.onload(); // Chama onload manualmente se já estiver carregado
    }

  }, []); // O array de dependências vazio garante que este efeito rode apenas uma vez na montagem do componente

  return (
    // O div onde o canvas do Three.js será montado.
    // Estilos CSS comuns para posicionamento e fundo.
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(to bottom right, #6495ED, #4682B4, #5F9EA0)' // Cores azuis claras e médias
      }}
    >
      {/* O canvas do Three.js será anexado aqui */}
    </div>
  );
};

export default AnimatedBackground; // Exporta o componente para ser usado no App.js
