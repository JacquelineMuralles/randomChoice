const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

//want to autimatically focus on textarea = will put cursor in textarea on page load
textarea.focus()

//when press down and let go this event will pop off
textarea.addEventListener('keyup', (e) => {
    //this will be whatever we type in
    createTags(e.target.value)
})

function createTags(input){
    //splits each input seperated by a comma and trims white space
    const tags = input.split(',').filter(tag => tag.trim() !== ' ').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    //takes our tags which is an array and loop through using forEach 
    tags.forEach(tag => {
        //forEach tag create a tag element of span
        const tagEl = document.createElement('span')
        //create a class to the span
        tagEl.classList.add('tag')
        //need to set the innerText of the span that was created
        tagEl.innerText = tag
        //then take tags element and add each of these elements
        tagsEl.appendChild(tagEl)
    })
}