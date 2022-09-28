var data = [];
var k = 0;
for (let i in contdata) {
  try {
    if (contdata[i].children[0].nodeName == "SPAN") {
      contdata[i].children[0].innerText
    }
  } catch {
    continue;
  }
}