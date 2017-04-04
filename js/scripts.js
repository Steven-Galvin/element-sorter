// back end logic

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
}

var sortElementNames = function(obj) {
  var keys = [];
  for (var key in periodicTable) {
    keys.push(key);
  }
  var sortByName = keys.sort();
  return sortByName;
}

// front end logic

$(function() {


  console.log(sortElementNames(periodicTable));

});
