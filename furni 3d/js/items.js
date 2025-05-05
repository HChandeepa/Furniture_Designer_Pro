// add items to the "Add Items" tab
$(document).ready(function() {
  var items = [
    {
      "name": "Modern Office Chair",
      "image": "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model": "models/js/gus-churchchair-whiteoak.js",
      "type": "1"
    }, 
    {
      "name": "Vibrant Accent Chair",
      "image": "models/thumbnails/thumbnail_tn-orange.png",
      "model": "models/js/ik-ekero-orange_baked.js",
      "type": "1"
    },
    {
      "name": "Contemporary Lounge Chair",
      "image": "models/thumbnails/thumbnail_ekero-blue3.png",
      "model": "models/js/ik-ekero-blue_baked.js",
      "type": "1"
    },
    {
      "name": "Classic Wooden Dresser",
      "image": "models/thumbnails/thumbnail_matera_dresser_5.png",
      "model": "models/js/DWR_MATERA_DRESSER2.js",
      "type": "1"
    }, 
    {
      "name": "Minimalist White Dresser",
      "image": "models/thumbnails/thumbnail_img25o.jpg",
      "model": "models/js/we-narrow6white_baked.js",
      "type": "1"
    },  
    {
      "name": "Modern Nightstand",
      "image": "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model": "models/js/bd-shalebedside-smoke_baked.js",
      "type": "1"
    }, 
    {
      "name": "Elegant Bedside Table",
      "image": "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
      "model": "models/js/cb-archnight-white_baked.js",
      "type": "1"
    }, 
    {
      "name": "Sleek Wardrobe",
      "image": "models/thumbnails/thumbnail_TN-ikea-kvikine.png",
      "model": "models/js/ik-kivine_baked.js",
      "type": "1"
    }, 
    {
      "name": "Comfort Full Bed",
      "image": "models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
      "model": "models/js/ik_nordli_full.js",
      "type": "1"
    }, 
    {
      "name": "Rustic Bookshelf",
      "image": "models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
      "model": "models/js/cb-kendallbookcasewalnut_baked.js",
      "type": "1"
    }, 
    {
      "name": "Contemporary TV Stand",
      "image": "models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
      "model": "models/js/cb-clapboard_baked.js",
      "type": "1"
    }, 
    {
      "name": "Modern Entertainment Unit",
      "image": "models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
      "model": "models/js/cb-moore_baked.js",
      "type": "1"
    }, 
    {
      "name": "L-Shaped Sectional Sofa",
      "image": "models/thumbnails/thumbnail_img21o.jpg",
      "model": "models/js/we-crosby2piece-greenbaked.js",
      "type": "1"
    }, 
    {
      "name": "Elegant Gray Sofa",
      "image": "models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
      "model": "models/js/cb-rochelle-gray_baked.js",
      "type": "1"
    }, 
    {
      "name": "Vintage Storage Chest",
      "image": "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
      "model": "models/js/cb-tecs_baked.js",
      "type": "1"
    }, 
    {
      "name": "Designer Floor Lamp",
      "image": "models/thumbnails/thumbnail_ore-white.png",
      "model": "models/js/ore-3legged-white_baked.js",
      "type": "1"
    },
    {
      "name": "Wooden Coffee Table",
      "image": "models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
      "model": "models/js/ik-stockholmcoffee-brown.js",
      "type": "1"
    }, 
    {
      "name": "Compact Side Table",
      "image": "models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
      "model": "models/js/GUSossingtonendtable.js",
      "type": "1"
    }, 
    {
      "name": "Formal Dining Table",
      "image": "models/thumbnails/thumbnail_scholar-dining-table.jpg",
      "model": "models/js/cb-scholartable_baked.js",
      "type": "1"
    }, 
    {
      "name": "Farmhouse Dining Table",
      "image": "models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
      "model": "models/js/BlakeAvenuejoshuatreecheftable.js",
      "type": "1"
    }
  ];

  // Shuffle the items array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle the items
  items = shuffleArray(items);

  var itemsDiv = $("#items-wrapper");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' + 
                item.name + 
                '" model-url="' +
                item.model +
                '" model-type="' +
                item.type + 
                '"><img src="' +
                item.image + 
                '" alt="Add Item"> '+
                item.name +
                '</a></div>';
    itemsDiv.append(html);
  }
});