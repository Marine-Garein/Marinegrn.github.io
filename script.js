        document.addEventListener('DOMContentLoaded', function() {

            const profileImg = document.getElementById('profileImg');

        });

        function startGame() {
            document.getElementById('game').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }

        function backToMenu(event) {
            if (event) event.preventDefault();
            document.getElementById('menu').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }

        function downloadCV() {
            const link = document.createElement('a');
            
            // Fichier dans le dossier assets
            link.href = '/assets/GareinMarine_CV-FullStack.pdf';
            link.download = 'Marine_Garein_CV.pdf';
            link.style.display = 'none';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Add some interactive effects
        document.addEventListener('mousemove', (e) => {
            const cursor = document.createElement('div');
            cursor.style.position = 'fixed';
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.style.width = '2px';
            cursor.style.height = '2px';
            cursor.style.background = '#4a67ff';
            cursor.style.borderRadius = '50%';
            cursor.style.pointerEvents = 'none';
            cursor.style.zIndex = '9999';
            cursor.style.boxShadow = '0 0 10px #4a67ff';
            cursor.style.opacity = '0.7';
            document.body.appendChild(cursor);
            
            setTimeout(() => {
                cursor.remove();
            }, 1000);
        });

        // Glitch effect on hover
        document.querySelectorAll('.glitch').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.animation = 'none';
                element.offsetHeight; // Trigger reflow
                element.style.animation = 'glitch-1 0.3s';
            });
        });