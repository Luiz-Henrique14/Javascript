 let tl = gsap.timeline({ repeat: -1, repeatDelay: 3 }); // Repete infinito // tempo de demora para repetir o código

        tl.to(".quadrado", { 
            x: 200,                    // 1️⃣ PRIMEIRO: 200px DIREITA
            duration: 2, 
            backgroundColor: "orange"
        })
        .to(".quadrado", { 
            y: -200,                   // 2️⃣ DEPOIS: 200px CIMA
            duration: 2, 
            backgroundColor: "red"
        })
        .to(".quadrado", { 
            x: 0, y: 0,                // 3️⃣ VOLTA posição inicial
            backgroundColor: "#4ecdc4",
            duration: 2
        });