
        document.addEventListener("DOMContentLoaded", () => {
            const pictures = [
                "screenshot1",
                "screenshot2",
                "screenshot3",
                "screenshot4"
            ];
            const imgDiv = document.querySelector(".left")
            let counter = 0
            function count(){
                counter++;
                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                // e.preventDefault();
                imgDiv.style.background = `url('Images/${pictures[counter]}.png') center/cover no-repeat`
            }
                        setInterval(count,2000);
        });
    