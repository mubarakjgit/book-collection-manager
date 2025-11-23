let backpop=document.getElementById("hideForpop");
            let pop=document.getElementById("popUp");

            function funcAdd(){

                backpop.style.display="block";
                pop.style.display="block";
            }


            function funcCancelInPop(){
                backpop.style.display="none";
                pop.style.display="none";
                document.getElementById("title").value="";
                document.getElementById("author").value="";
                document.getElementById("content").value="";
            }


            function funcAddCon(){
                let div=document.createElement("div");
                div.className="book"

                let title=document.getElementById("title").value;
                document.getElementById("title").value="";

                let author=document.getElementById("author").value;
                document.getElementById("author").value="";

                let content=document.getElementById("content").value;
                document.getElementById("content").value="";

                let h2Title=document.createElement("h2");
                h2Title.className="titlesamp";
                h2Title.innerHTML=`${title}`;
                

                let bAuthor=document.createElement("b");
                bAuthor.className="authorsamp";
                bAuthor.innerHTML=`${author}`;
                

                let pContent=document.createElement("p");
                pContent.className="contentsamp";
                pContent.innerHTML=`${content}`;
               

                let delBtn = document.createElement("button");
                delBtn.textContent = "Delete";
                delBtn.onclick = () => div.remove();
                delBtn.className="deletesamp";

                div.append(h2Title,bAuthor,pContent,delBtn);

                document.body.appendChild(div);

                funcCancelInPop();
            }