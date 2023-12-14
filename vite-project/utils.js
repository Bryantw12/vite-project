import palettes from "./palettes.json"

export const getEl = (element) => document.querySelector(element);


export const renderCard = (palette, where) => {
const paletteDiv = document.createElement('div') 
paletteDiv.id = palette.uuid
paletteDiv.innerHTML=`

<div>
<h2>${palette.title}</h2>

<div> 
<ul>
  <li>Text Example</li>
  <li>Text Example</li>
  <li>Text Example</li>
</ul>

<ul>
  <li>Copy ${palette.colors[0]} </li>
  <li>Copy  ${palette.colors[1]}</li>
  <li>Copy  ${palette.colors[2]}</li>
</ul>
 </div>

<div> 
<button>Delete Palette </button>

<p> ${palette.temperature} </p>
</div>
</div>

`
getEl(where).append(paletteDiv)
}
