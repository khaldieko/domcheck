
var count1 = 1;
var countEl1 = document.getElementById("text-value-1");
function increment1() {
  count1 += 1;
  countEl1.value = count1;
  let unitprice1 = document.getElementById("fixed-price-1").textContent;
  //290,000
  unitprice1 = unitprice1.replace("#", "");
  unitprice1 = unitprice1.replace(",", "");
  unitprice1 = parseInt(unitprice1);
  let totalprice1 = unitprice1 * count1;
  document.getElementById("total-price-1").textContent =
    "#" + totalprice1.toLocaleString();
  totalprice();
}

function decrement1() {
  count1 -= 1;
  countEl1.value = count1;
  let unitprice1d = document.getElementById("fixed-price-1").textContent;
  //#150,000
  unitprice1d = unitprice1d.replace("#", "");
  unitprice1d = unitprice1d.replace(",", "");
  unitprice1d = parseInt(unitprice1d);
  let totalprice1d = unitprice1d * count1;
  document.getElementById("total-price-1").textContent =
    "#" + totalprice1d.toLocaleString();
  if (count1 < 1) {
    console.log(count1);
    count1 = parseInt("1");
  }
  totalprice();
}

var count2 = 1;
var countEl2 = document.getElementById("text-value-2");
function increment2() {
  count2 += 1;
  countEl2.value = count2;
  let unitprice2 = document.getElementById("fixed-price-2").textContent;
  //#100,000
  unitprice2 = unitprice2.replace("#", "");
  unitprice2 = unitprice2.replace(",", "");
  unitprice2 = parseInt(unitprice2);
  let totalprice2 = unitprice2 * count2;
  document.getElementById("total-price-2").textContent =
    "#" + totalprice2.toLocaleString();
  totalprice();
}
function decrement2() {
  count2 -= 1;
  countEl2.value = count2;
  let unitprice2d = document.getElementById("fixed-price-2").textContent;
  //#150,000
  unitprice2d = unitprice2d.replace("#", "");
  unitprice2d = unitprice2d.replace(",", "");
  unitprice2d = parseInt(unitprice2d);
  let totalprice2d = unitprice2d * count2;
  document.getElementById("total-price-2").textContent =
    "#" + totalprice2d.toLocaleString();
  if (count2 < 1) {
    console.log(count2);
    count2 = parseInt("1");
  }
  totalprice();
}
var count3 = 1;
var countEl3 = document.getElementById("text-value-3");
function increment3() {
  count3 += 1;
  countEl3.value = count3;
  let unitprice3 = document.getElementById("fixed-price-3").textContent;
  //#150,000
  unitprice3 = unitprice3.replace("#", "");
  unitprice3 = unitprice3.replace(",", "");
  unitprice3 = parseInt(unitprice3);
  let totalprice3 = unitprice3 * count3;
  document.getElementById("total-price-3").textContent =
    "#" + totalprice3.toLocaleString();
  totalprice();
}

function decrement3() {
  count3 -= 1;
  countEl3.value = count3;
  let unitprice3d = document.getElementById("fixed-price-3").textContent;
  //#150,000
  unitprice3d = unitprice3d.replace("#", "");
  unitprice3d = unitprice3d.replace(",", "");
  unitprice3d = parseInt(unitprice3d);
  let totalprice3d = unitprice3d * count3;
  document.getElementById("total-price-3").textContent =
    "#" + totalprice3d.toLocaleString();

  if (count3 < 1) {
    console.log(count3);
    count3 = parseInt("1");
  }
  totalprice();
}
function totalprice() {
  let TotalPrice1 = document.getElementById("total-price-1").textContent;
  //#150,000
  TotalPrice1 = TotalPrice1.replace("#", "");
  TotalPrice1 = TotalPrice1.split(",").join("");
  TotalPrice1 = parseInt(TotalPrice1);
  console.log(TotalPrice1);
  let TotalPrice2 = document.getElementById("total-price-2").textContent;
  //#150,000
  TotalPrice2 = TotalPrice2.replace("#", "");
  TotalPrice2 = TotalPrice2.split(",").join("");
  TotalPrice2 = parseInt(TotalPrice2);

  let TotalPrice3 = document.getElementById("total-price-3").textContent;
  //#150,000
  TotalPrice3 = TotalPrice3.replace("#", "");
  TotalPrice3 = TotalPrice3.split(",").join("");
  TotalPrice3 = parseInt(TotalPrice3);

  let SumTotal = TotalPrice1 + TotalPrice2 + TotalPrice3;
  document.getElementById("sum-total").textContent =
    "Total:   #" + SumTotal.toLocaleString();
}
