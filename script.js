        // Part 2: JavaScript Functions
        
        // Global variable
        let boxVisible = true;
        
        // Function with parameters and return value
        function calculateArea(width, height) {
            return width * height;
        }
        
        // Demonstrate function usage
        console.log("Area of 5x10:", calculateArea(5, 10));
        console.log("Area of 8x12:", calculateArea(8, 12));
        
        // Function to change box color
        function changeColor(color) {
            const box = document.getElementById('jsDemoBox');
            box.style.background = color;
        }
        
        // Function to toggle visibility
        function toggleVisibility() {
            const box = document.getElementById('jsDemoBox');
            boxVisible = !boxVisible;
            
            if (boxVisible) {
                box.style.opacity = '1';
            } else {
                box.style.opacity = '0';
            }
        }
        
        // Part 3: Combined CSS & JavaScript
        
        // Card flip function
        function flipCard() {
            const card = document.getElementById('cardFlip');
            card.classList.toggle('flipped');
        }
        
        // Modal functions
        function openModal() {
            const modal = document.getElementById('modal');
            modal.classList.add('active');
        }
        
        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('active');
        }
        
        // Close modal when clicking outside content
        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    