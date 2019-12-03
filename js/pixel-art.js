var paleta = document.getElementById('paleta');

var grillaPixeles = document.getElementById('grilla-pixeles');

var indicadorDeColor = document.getElementById('indicador-de-color'); 

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


function crearPaleta (nombreColores){
  for (var i= 0;i < nombreColores.length; i++){
    var nuevoDiv = document.createElement('div');
    nuevoDiv.style.backgroundColor = nombreColores[i];
    nuevoDiv.classList.add("color-paleta");
    nuevoDiv.addEventListener("click", tomarColor)
    paleta.appendChild(nuevoDiv);
  }
}

crearPaleta(nombreColores);

function crearGrilla () {
  for (var i=0; i < 1750; i++){
  var crearPixel = document.createElement('div');
  crearPixel.classList.add('pixel'); 
  grillaPixeles.appendChild(crearPixel);
  }
}
crearGrilla(); 


function tomarColor(e){
   indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
  } 
  


$('.pixel').click(function(){
  var color = indicadorDeColor.style.backgroundColor
  $(this).css("backgroundColor", color); 
});




// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');


colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
   indicadorDeColor.style.backgroundColor = colorActual;
  })
)

var clickeado = false; 



$(".pixel").hover(function(){
      if (clickeado){
          var color = indicadorDeColor.style.backgroundColor
          $(this).css("backgroundColor", color); 
      }

  });
  $(".pixel").mousedown(function(){
      clickeado = true;
     });

  $(".pixel").mouseup(function(){
      clickeado  = false;  
       });
  

$("#borrar").click(function(){
   $(".pixel").animate({"backgroundColor": "white"},400);
})

$("#batman").click(function(){
  cargarSuperheroe(batman);
})

$("#wonder").click(function(){
  cargarSuperheroe(wonder);
})

$("#flash").click(function(){
  cargarSuperheroe(flash);
})

$("#invisible").click(function(){
  cargarSuperheroe(invisible);
})


$("#guardar").click(function(){
  guardarPixelArt();
})










  

