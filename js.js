(function() {
    var canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        var square = {
            x: 0,
            y: 0,
            width: 40,
            height: 40,
            color: "#8bbd13",
            moveBy: 40,
            createSquare: function() {
                clearCanvas();
                context.fillStyle = this.color;
                context.fillRect(this.x, this.y, this.width, this.height);
            }
        }
        var canvasLimit = {
            right: 480,
            bottom: 280,
            top: 0,
            left: 0
        }
        var key = {
            right: 39,
            left: 37,
            top: 38,
            bottom: 40
        }

        function clearCanvas() {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }

        function moveIt(e, keyCodeValue, coordinate, canvasLimit) {
            if (square[coordinate] < canvasLimit) {
                if (e.keyCode === keyCodeValue) {
                    square[coordinate] += square.moveBy;
                    square.createSquare();
                }
            }
            if (square[coordinate] > canvasLimit) {
                if (e.keyCode === keyCodeValue) {
                    square[coordinate] -= square.moveBy;
                    square.createSquare();
                }
            }
        }

        function move(e) {
            moveIt(e, key.right, "x", canvasLimit.right)
            moveIt(e, key.left, "x", canvasLimit.left)
            moveIt(e, key.top, "y", canvasLimit.top)
            moveIt(e, key.bottom, "y", canvasLimit.bottom)
        }

        function addFocus() {
            canvas.setAttribute("tabindex", 0)
            canvas.focus();
        }

        function addOnLoad() {
            addFocus();
            square.createSquare();
        }

        canvas.addEventListener('keydown', move, true);
        document.body.addEventListener('load', addOnLoad(), true);

    }
})();
