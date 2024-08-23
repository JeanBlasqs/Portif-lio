document.addEventListener('DOMContentLoaded', function() {
    particlesJS.load('particles', 'componentes/particles.json', function() {
        console.log('Particles.js loaded');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('.text-content h1');
    let hasAnimated = false; // Variável para rastrear se a animação já ocorreu

    function checkScroll() {
        if (!h1) return; // Certifique-se de que o título existe

        const rect = h1.getBoundingClientRect(); // Obtém a posição do título em relação à viewport
        const windowHeight = window.innerHeight; // Altura da viewport

        // Verifica se o título está visível na viewport ao rolar para baixo
        if (rect.top >= 0 && rect.top <= windowHeight) {
            if (!hasAnimated) {
                h1.classList.add('animated'); // Adiciona a classe para iniciar a animação de entrada
                h1.classList.remove('hidden'); // Remove a classe para a animação de saída
                hasAnimated = true; // Marca que a animação já ocorreu
            }
        } else if (rect.bottom < 0 || rect.top > windowHeight * 1.1) {
            // Se o título estiver fora da viewport (para cima), reinicia a variável para a animação de entrada futura
            if (hasAnimated) {
                h1.classList.add('hidden'); // Adiciona a classe para a animação de saída
                h1.classList.remove('animated'); // Remove a classe para a animação de entrada
                hasAnimated = false; // Permite a animação de entrada quando voltar para a tela
            }
        }
    }

    // Verifica a rolagem inicial e ao rolar
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});

particlesJS('particles', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        }
    },
    "retina_detect": true
});

document.addEventListener('scroll', function() {
    const trabalhosSection = document.getElementById('trabalhos');
    const sectionTop = trabalhosSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight * 0.75) {
        trabalhosSection.classList.add('visible');
    } else {
        trabalhosSection.classList.remove('visible');
    }
});

document.addEventListener("scroll", function() {
    const contatoSection = document.querySelector("#contato");
    const sectionPosition = contatoSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5; // Ajusta o ponto em que a transição começa

    if (sectionPosition < screenPosition) {
        contatoSection.classList.add("visible");
    } else {
        contatoSection.classList.remove("visible");
    }
});

document.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image');
    const scrollPosition = window.scrollY;
    heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Ajuste o valor para controlar a velocidade do parallax
});


document.addEventListener('scroll', function() {
    const sobreSection = document.querySelector('#sobre');
    const sectionPosition = sobreSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        sobreSection.querySelectorAll('.text-content h1, .p1, .p2, .p3').forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }
});






