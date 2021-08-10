const tagsDiv = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomChoice();
    }
});

const createTags = (input) => {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsDiv.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML = tag;
        tagsDiv.appendChild(tagEl);
    });
}

const randomChoice = () => {
    const times = 25;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            removeHighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }), 100;

    }, times * 100);
}

const pickRandomTag = () => {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

const highlightTag = tag => {
    tag.classList.add('highlight');
}

const removeHighlightTag = tag => {
    tag.classList.remove('highlight');
}
