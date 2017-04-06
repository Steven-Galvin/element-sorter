// back end logic

/* constructor function to store the
info for a single element */
function Element(number, symbol, weight) {
  this.number = number;
  this.symbol = symbol;
  this.weight = weight;
}

var periodicTable = {
  Hydrogen: new Element(1, 'H', 1.008),
  Helium: new Element(2, 'He', 4.002),
  Lithium: new Element(3, 'Li', 6.94),
  Beryllium: new Element(4, 'Be', 9.012),
  Boron: new Element(5, 'B', 10.81),
  Carbon: new Element(6, 'C', 12.011),
  Nitrogen: new Element(7, 'N', 14.007),
  Oxygen: new Element(8, 'O', 15.999),
  Fluorine: new Element(9, 'F', 18.998),
  Neon: new Element(10, 'Ne', 20.179),
  Sodium: new Element(11, 'Na', 22.989),
  Magnesium: new Element(12, 'Mg', 24.305),
  Aluminum: new Element(13, 'Al', 26.982),
  Silicon: new Element(14, 'Si', 28.085),
  Phosphorus: new Element(15, 'P', 30.973),
  Sulfur: new Element(16, 'S', 32.06),
  Chlorine: new Element(17, 'Cl', 35.45),
  Argon: new Element(18, 'Ar', 39.948),
  Potassium: new Element(19, 'K', 39.098),
  Calcium: new Element(20, 'Ca', 40.078),
  Scandium: new Element(21, 'Sc', 44.956),
  Titanium: new Element(22, 'Ti', 47.867),
  Vanadium: new Element(23, 'V', 50.942),
  Chromium: new Element(24, 'Cr', 51.996),
  Manganese: new Element(25, "Mn", 54.938),
  Iron: new Element(26, 'Fe', 55.845),
  Cobalt: new Element(27, 'Co', 58.933),
  Nickel: new Element(28, 'Ni', 58.693),
  Copper: new Element(29, 'Cu', 63.546),
  Zinc: new Element(30, 'Zn', 65.38),
  Gallium: new Element(31, 'Ga', 69.723),
  Germanium: new Element(32, 'Ge', 72.630),
  Arsenic: new Element(33, 'As', 74.922),
  Selenium: new Element(34, 'Se', 78.971),
  Bromine: new Element(35, 'Br', 79.904),
  Kryton: new Element(36, 'Kr', 83.798),
  Rubidium: new Element(37, 'Rb', 85.468),
  Strontium: new Element(38, 'Sr', 87.62),
  Yttrium: new Element(39, 'Y', 88.906),
  Zirconium: new Element(40, 'Zr', 91.224),
  Niobium: new Element(41, 'Nb', 92.906),
  Molybdenum: new Element(42, 'Mo', 95.95),
  Technetium: new Element(43, 'Tc', 98),
  Ruthenium: new Element(44, 'Ru', 101.07),
  Rhodium: new Element(45, 'Rh', 102.906),
  Palladium: new Element(46, 'Pd', 106.42),
  Silver: new Element(47, 'Ag', 107.868),
  Cadmium: new Element(48, 'Cd', 112.414),
  Indium: new Element(49, 'In', 114.818),
  Tin: new Element(50, 'Sn', 118.710),
  Antimony: new Element(51, 'Sb', 121.760),
  Tellurium: new Element(52, 'Te', 127.60),
  Iodine: new Element(53, 'I', 126.904),
  Xenon: new Element(54, 'Xe', 131.293),
  Caesium: new Element(55, 'Cs', 132.905),
  Barium: new Element(56, 'Ba', 137.327),
  Lanthanum: new Element(57, 'La', 138.905),
  Cerium: new Element(58, 'Ce', 140.116),
  Praseodymium: new Element(59, 'Pr', 140.908),
  Neodymium: new Element(60, 'Nd', 144.242),
  Promethium: new Element(61, 'Pm', 145),
  Samarium: new Element(62, 'Sm', 150.36),
  Europium: new Element(63, 'Eu', 151.964),
  Gadolinium: new Element(64, 'Gd', 157.25),
  Terbium: new Element(65, 'Tb', 158.925),
  Dysprosium: new Element(66, 'Dy', 162.500),
  Holmium: new Element(67, 'Ho', 164.930),
  Erbium: new Element(68, 'Er', 167.259),
  Thulium: new Element(69, 'Tm', 168.934),
  Ytterbium: new Element(70, 'Yb', 173.045),
  Lutetium: new Element(71, 'Lu', 174.967),
  Hafnium: new Element(72, 'Hf', 178.49),
  Tantalum: new Element(73, 'Ta', 180.948),
  Tungsten: new Element(74, 'W', 183.84),
  Rhenium: new Element(75, 'Re', 186.207),
  Osmium: new Element(76, 'Os', 190.23),
  Iridium: new Element(77, 'Ir', 192.217),
  Platinum: new Element(78, 'Pt', 195.084),
  Gold: new Element(79, 'Au', 196.967),
  Mercury: new Element(80, 'Hg', 200.592),
  Thalliun: new Element(81, 'Tl', 204.38),
  Lead: new Element(82, 'Pb', 207.2),
  Bismuth: new Element(83, 'Bi', 208.980),
  Polonium: new Element(84, 'Po', 209),
  Astatine: new Element(85, 'At', 210),
  Radon: new Element(86, 'Rn', 222),
  Francium: new Element(87, 'Fr', 223),
  Radium: new Element(88, 'Ra', 226),
  Actinium: new Element(89, 'Ac', 227),
  Thorium: new Element(90, 'Th', 232.038),
  Protactinium: new Element(91, 'Pa', 231.035),
  Uranium: new Element(92, 'U', 238.029),
  Neptunium: new Element(93, 'Np', 237),
  Plutonium: new Element(94, 'Pu', 244),
  Americium: new Element(95, 'Am', 243),
  Curium: new Element(96, 'Cm', 247),
  Berkelium: new Element(97, 'Bk', 247),
  Californium: new Element(98, 'Cf', 251),
  Einsteinium: new Element(99, 'Es', 252),
  Fermium: new Element(100, 'Fm', 257),
  Mendelevium: new Element(101, 'Md', 258),
  Nobelium: new Element(102, 'No', 259),
  Lawrencium: new Element(103, 'Lr', 266),
  Rutherfordium: new Element(104, 'Rf', 267),
  Dubnium: new Element(105, 'Db', 268),
  Seaborgium: new Element(106, 'Sg', 269),
  Bohrium: new Element(107, 'Bh', 270),
  Hassium: new Element(108, 'Hs', 277),
  Meitnerium: new Element(109, 'Mt', 278),
  Darmstadtium: new Element(110, 'Ds', 281),
  Roentgenium: new Element(111, 'Rg', 282),
  Copernicium: new Element(112, 'Cn', 285),
  Nihonium: new Element(113, 'Nh', 286),
  Flerovium: new Element(114, 'Fl', 289),
  Moscovium: new Element(115, 'Mc', 290),
  Livermorium: new Element(116, 'Lv', 293),
  Tennessine: new Element(117, 'Ts', 294),
  Oganesson: new Element(118, 'Og', 294),
}


/* function that takes the periodicTable object as argument and returns it
formatted as an array, elements sorted alphabetically by name */
var sortElementNames = function(obj) {
  var sortedByName = [];
  var keys = Object.keys(obj).sort();

  keys.forEach(function(key) {
    sortedByName.push([key, obj[key]]);
  });

  return sortedByName;
}


/* function that takes the periodicTable obj as argument and returns
it formatted as an array, elements sorted alphabetically by atomic symbol */
var sortElementSymbols = function(obj) {
  var sortedBySymbol = [];

  for (key in obj) {
    sortedBySymbol.push([key, obj[key]]);
  }

  sortedBySymbol.sort(function(a, b) {
		var x = a[1].symbol;
		var	y = b[1].symbol;

    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else {
      return 0;
    }
	});

  return sortedBySymbol;
}


/* function that takes the periodicTable obj as argument and returns
it formatted as an array, elements sorted ascending by atomic number */
var sortAtomicNumbers = function(obj) {
  var sortedByNumber = [];

  for (key in obj) {
    sortedByNumber.push([key, obj[key]]);
  }

  sortedByNumber.sort(function(a, b) {
    var x = a[1].number;
    var y = b[1].number;
    return x - y;
  });

  return sortedByNumber;
}


/* function that takes the periodicTable obj as argument and returns
it formatted as an array, elements sorted ascending by atomic weight */
var sortAtomicWeight = function(obj) {
  var sortedByWeight = [];

  for (key in obj) {
    sortedByWeight.push([key, obj[key]]);
  }

  sortedByWeight.sort(function(a, b) {
    var x = a[1].weight;
    var y = b[1].weight;
    return x - y;
  });

  return sortedByWeight;
}


// front end logic
$(function() {
  // console.log(periodicTable);
  // console.log(sortElementNames(periodicTable));
  // console.log(sortElementSymbols(periodicTable));
  // console.log(sortAtomicNumbers(periodicTable));
  // console.log(sortAtomicWeight(periodicTable));
  $('form#list-style').submit(function(event) {
    var selection = $('select#select-list-style').val();
    var selectedList;
    console.log(selection);

    if (selection === 'name') {
      selectedList = sortElementNames(periodicTable);
    } else if (selection === 'symbol') {
      selectedList = sortElementSymbols(periodicTable);
    } else if (selection === 'number') {
      selectedList = sortAtomicNumbers(periodicTable);
    } else if (selection === 'weight') {
      selectedList = sortAtomicWeight(periodicTable);
    }

    console.log(selectedList);








    event.preventDefault();
  });
});
