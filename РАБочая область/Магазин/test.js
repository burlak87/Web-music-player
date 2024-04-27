let btnOne = document.getElementById("btnOne").addEventListener("click", () => {
    let = document.querySelector("dialog").showModal();
    dialog.setAttribute('id', 'dialog');
    article.appendChild(dialog);
    article.setAttribute('id', 'dialogArticle');
    title = `${one.title}`;
    article.appendChild(h3);
    h3.innerText = title; 
    paragraph = `${one.paragraph}`;
    article.appendChild(p);
    p.innerText = paragraph;
    article.appendChild(span);
    span.innerText = spanText;
});

let btnTwo = document.getElementById("btnTwo").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    article.appendChild(dialog);
    article.classList.add("dialogArticle");
    title = `${two.title}`;
    article.appendChild(h3);
    h3.innerText = title; 
    paragraph = `${two.paragraph}`;
    article.appendChild(p);
    p.innerText = paragraph;
    article.appendChild(span);
});