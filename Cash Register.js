function checkCashRegister(price, cash, cid) {
  let change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  let initialdiff = cash - price;
  let diff = initialdiff;
  // Here is your change, ma'am.
  // 'soFar' function returns the combined sum of the 'change' array in each iteration.
  let  soFar = function (arr) {
    let sum = 0;
    arr.forEach(function (denom) {
      sum += denom[1];
    });
    return sum;
  }
  // Iterating each coin and bill.
  while (diff > 0) {
    // $100 (ONE HUNDRED)
    if (diff >= 100) {
    change[8][1] = cid[8][1] >= diff ? Math.floor(diff / 100) * 100 : cid[8][1];
    diff = (initialdiff - soFar(change)).toPrecision(2);
    }
    //  $20 (TWENTY)
    if (diff >= 20) {
    change[7][1] = cid[7][1] >= diff ? Math.floor(diff /  20) * 20 : cid[7][1];
    (diff = initialdiff - soFar(change)).toPrecision(2);
    }
    // $10 (TEN)
    if (diff >= 10) {
    change[6][1] = cid[6][1] >= diff ? Math.floor(diff / 10) * 10 : cid[6][1];
    diff = (initialdiff - soFar(change)).toPrecision(2);
    }
    // $5 (FIVE)
    if (diff >= 5) {
    change[5][1] = cid[5][1] >= diff ? Math.floor(diff / 5) * 5 : cid[5][1];
    diff = (initialdiff - soFar(change)).toPrecision(2);
    }
    // $1 (DOLLAR)
    if (diff >= 1) {
    change[4][1] = cid[4][1] >= diff ? Math.floor(diff) : cid[4][1];
    diff = (initialdiff - soFar(change)).toPrecision(2);
    }
    // $0.25 (QUARTER)
    if (diff >= 0.25) {
    change[3][1] = cid[3][1] >= diff ? Math.floor(diff / 0.25) * .25 : cid[3][1];
    diff = (initialdiff - soFar(change)).toPrecision(2);
    }
    // $0.1 (DIME)
    if (diff >= 0.1) {
    change[2][1] = cid[2][1] >= diff ? Math.floor(diff / 0.1) * 0.1 : cid[2][1];
    diff = (initialdiff - soFar(change)).toPrecision(2);
    }
    // $0.05 (NICKEL)
    if (diff >= 0.05) {
    change[1][1] = cid[1][1] >= diff ? Math.floor(diff / 0.05) * 0.05 : cid[1][1];
    diff = (initialdiff - soFar(change)).toPrecision(2);
    }
    //  $0.01 (PENNY)
    if (diff >= 0.01) {
    change[0][1] = cid[0][1] >= diff ? Math.floor(diff / 0.01) * 0.01 : cid[0][1];
    diff = (initialdiff - soFar(change)).toPrecision(2);
    }
    break;
  }
  // 'change2' is the 'change' array sorted in highest to lowest order, filtered for items with an amount greater than zero.
  let change2 = [...change].filter(item => item[1] > 0).reverse();
  return diff > 0 ? {status: "INSUFFICIENT_FUNDS", change: []} : soFar(cid) == soFar(change) ?  {status: "CLOSED", change: change} : {status: "OPEN", change: change2};
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
