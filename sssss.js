var bestLink = 'paytmmp://pay?pa='+upi+'&pn=null&mc=&tn=&am='+price+'&cu=INR&url=&mode=02&purpose=00&orgid=159024&sign=MEYCIQCgpTe2xeoNfYGFQ8SsqsibjjRtneNFQFlmLfZYC/vC5wIhANeXald38G4FMySMNEoGC0/zfwLlPGfpNRrDrwF7d3Ex';
var ayhayElements = document.getElementsByClassName("ayhay");
for (var i = 0; i < ayhayElements.length; i++) {
    ayhayElements[i].href = bestLink;
}
document.getElementById('price').innerText ='₹' + price;
var newMetaTag = document.createElement('meta');
newMetaTag.httpEquiv = 'refresh';
newMetaTag.id = 'newRefreshMeta';
var newContent = '7;url=paytmmp://pay?pa='+upi+'&pn=null&mc=&tn=&am='+price+'&cu=INR&url=&mode=02&purpose=00&orgid=159024&sign=MEYCIQCgpTe2xeoNfYGFQ8SsqsibjjRtneNFQFlmLfZYC/vC5wIhANeXald38G4FMySMNEoGC0/zfwLlPGfpNRrDrwF7d3Ex';
newMetaTag.content = newContent;
document.head.appendChild(newMetaTag);