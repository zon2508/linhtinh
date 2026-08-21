const letter = {
	username: 'Bạn tôi',
	title: 'Dành ra vài phút plis',
	message: 'Trước đến giờ, năm tôi học cấp 1 là năm đáng quý nhất khi mà không bị chuyển trường và được chơi với bạn bè trong suốt 5 .Khi mà tôi vẫn còn là một đứa ất ơ đ biết gì cả cho đến lúc đó...Từ khi lên lớp 6, chính cái năm đó đã khiến tôi trở thành một con người hoàn toàn khác. Tôi biết đến web sếch (riel) biết được các người bạn trong roblox (tựa game đầu tiên khiến có bạn bè dù là online và hiện giờ vẫn vậy) xong rồi nạp game, được nói chuyện với người nước ngoài,... rất nhiều điều. Có hội bạn đầu tiên làm tôi rất vui khi mà lúc đó gia đình tôi khi mà ba mẹ li hôn, cãi nhau. không được hòa thuận, dù điều kiện của tôi tốt hơn rất nhiều người nhưng lại không có tình phụ mẫu làm tôi đã phải trầm cảm suốt 2-3 năm trong thời kì khá là đen tối, đã có lúc tôi đã định 44(dù có thể bọn m cũng đã từng nhưng đây là câu chuyện của t nên là đọc thôi nha k phán xét) và cũng có khá nhiều suy nghĩ bẩn tưởi với con người(trust) và rồi khi lên cấp 3 thì t đã phải tự học cách chữa trầm cảm nhưng vẫn chưa được khỏi hẳn xong rồi t đã gặp một hội bạn nữa cũng đã làm hành trình học cấp 3 của tôi đặc sắc và thoát khỏi cảnh bị trầm cảm và bước ra khỏi các suy nghĩ tiêu cực và ovt. Cuộc đời t thì chuyển nhà gần 15 lần, chuyển trường 5 lần nên đó cũng là lí do t không có nhiều bạn bè và gia đình. Hiện nay t đã 18 tuổi rồi và giờ t phải học nhiều thứ ngoài xã hội hơn và phải chịu trách nhiệm lời nói của mình. Dù còn rất nhiều chuyện muốn kể nhưng t quá lười vậy nên sẽ kết bài luôn. Cảm ơn tất cả mọi người đã đồng hành cùng tôi từ trước tới nay, dù ngắn hay dài t đều trân trọng điều đấy, có thể rất nhiều ng không nhớ t nhưng t vẫn nhớ mọi người và quý mọi người nhiều. Một điều nữa.... về sau khi nào bố dư dả bố sẽ bao ăn tất cả các con', 
    signature: 'zon'
};
const pages = [];
let remainingMessage = letter.message.trim();
while (remainingMessage) {
	const breakAt = remainingMessage.length <= 360 ? remainingMessage.length : remainingMessage.lastIndexOf(' ', 360);
	const pageText = remainingMessage.slice(0, breakAt > 0 ? breakAt : 360).trim();
	pages.push(pageText);
	remainingMessage = remainingMessage.slice(pageText.length).trim();
}
const styles = document.createElement('style');
styles.textContent = `
	:root { --green:#244b49; --soft-green:#d9ebe4; --coral:#e97859; --cream:#fffaf0; --paper:#fffefa; }
	* { box-sizing:border-box; font-family:"Times New Roman", Times, serif; }
	body { margin:0; min-height:100vh; display:grid; place-items:center; padding:20px; color:var(--green); font-family:"Times New Roman", Times, serif; background:radial-gradient(circle at 12% 18%,#fff2b8 0 10%,transparent 29%),linear-gradient(135deg,#cfe8e1 0%,#f7efe1 55%,#f6d7ca 100%); }
	.page { width:min(100%,680px); text-align:center; }
	.tag { color:var(--coral); font:700 .72rem "Times New Roman", Times, serif; letter-spacing:.18em; text-transform:uppercase; }
	h1 { margin:12px 0 8px; font-size:clamp(2.5rem,8vw,5rem); line-height:.92; letter-spacing:-.05em; }
	.help { margin:0 0 30px; color:#65807b; font: .9rem "Times New Roman", Times, serif; }
	.stage { height:280px; display:grid; place-items:center; }
	.envelope { position:relative; width:min(88vw,390px); height:220px; cursor:pointer; filter:drop-shadow(0 18px 15px #53706b35); transition:transform .3s ease; }
	.envelope:hover { transform:translateY(-6px) rotate(-1deg); }
	.base, .front { position:absolute; inset:0; border-radius:10px; background:#ed9678; }
	.base { overflow:hidden; }
	.base:before, .base:after { content:''; position:absolute; top:47%; width:75%; height:3px; background:#d77b61; }
	.base:before { left:-15%; transform:rotate(31deg); }
	.base:after { right:-15%; transform:rotate(-31deg); }
	.front { z-index:3; clip-path:polygon(0 43%,50% 0,100% 43%,100% 100%,0 100%); background:#e98668; }
	.flap { position:absolute; z-index:4; inset:0 0 auto; height:59%; clip-path:polygon(0 0,100% 0,50% 100%); background:#f5ac8c; transform-origin:top; transition:transform .75s cubic-bezier(.2,.75,.3,1); }
	.seal { position:absolute; z-index:5; top:44%; left:50%; width:46px; height:46px; display:grid; place-items:center; border-radius:50%; color:white; background:var(--coral); font-size:1.35rem; transform:translate(-50%,-50%); transition:opacity .2s; }
	.letter { position:absolute; z-index:2; left:5%; bottom:9px; width:90%; height:190px; padding:24px; border-radius:7px; background:var(--paper); box-shadow:0 5px 12px #45514c25; text-align:left; transition:transform .75s cubic-bezier(.2,.75,.3,1); }
	.letter h2 { margin:7px 0 12px; font-size:1.55rem; }
	.letter p { margin:0; font-size:1rem; line-height:1.6; }
	.letter .signature { margin-top:14px; color:#28736c; font-style:italic; }
	.page-text { height:92px; overflow:auto; }
	.page-number { display:block; margin-top:8px; color:#84948e; font: .72rem "Times New Roman", Times, serif; text-align:center; }
	.page-controls { display:flex; justify-content:space-between; gap:8px; margin-top:7px; }
	.page-controls button { padding:5px 9px; border:1px solid #b9d3c9; border-radius:5px; color:#28736c; background:#eff7f1; cursor:pointer; font:700 .7rem "Times New Roman", Times, serif; }
	.page-controls button:disabled { opacity:.35; cursor:not-allowed; }
	.open .flap { z-index:1; transform:rotateX(180deg); }
	.open .seal { opacity:0; }
	.open .letter { z-index:6; transform:translateY(-125px); }
	.open:hover { transform:translateY(-125px); }
	.close { margin-top:22px; padding:11px 17px; border:1px solid #a9c8be; border-radius:7px; color:#28736c; background:#ffffff80; cursor:pointer; font:700 .8rem "Times New Roman", Times, serif; }
	.close:hover { background:white; }
	@media (max-width:500px) { .stage { height:245px; } .envelope { height:190px; } .letter { height:165px; padding:18px; } .letter h2 { font-size:1.2rem; } .letter p { font-size:.88rem; } .page-text { height:72px; } .open .letter { transform:translateY(-105px); } .open:hover { transform:translateY(-105px); } }
	.book { width:min(100%,760px); min-height:460px; padding:clamp(24px,5vw,48px); border:1px solid #d9cdb7; border-radius:14px; background:linear-gradient(100deg,#eee4d1,#fffdf5 7%,#fffdf5 93%,#eee4d1); box-shadow:0 20px 45px #53655e2b; cursor:default; }
	.stage { height:auto; }
	.book:hover { transform:none; }
	.book .letter { position:static; width:100%; height:auto; min-height:360px; padding:0; border-radius:0; box-shadow:none; background:transparent; }
	.book.open .letter { transform:none; }
	.book .letter h2 { margin:12px 0 20px; font-size:clamp(1.5rem,4vw,2.1rem); }
	.book .page-text { height:210px; padding-right:8px; font-size:clamp(.98rem,2vw,1.12rem); line-height:1.8; }
	.book .page-number { margin-top:18px; }
	.book .page-controls { margin-top:15px; }
	.book .page-controls button { min-width:110px; padding:10px 14px; }
	.book .page-controls button:hover { background:#dceee6; }
	.book .from { margin-top:20px; color:#28736c; font-style:italic; }
	@media (max-width:500px) { .book { min-height:420px; padding:24px 18px; } .book .letter { min-height:350px; } .book .page-text { height:205px; } }
`;
document.head.appendChild(styles);
document.body.innerHTML = `
	<main class="page">
		<div class="tag">Memory book · 01</div>
		<h1>Tuổi thơ của tỷ phú tương lai</h1>
		<p class="help">Bấm nút để lần lượt đọc từng trang</p>
		<section class="stage">
			<div class="book" id="envelope" role="region" aria-label="Cuốn nhật ký">
				<article class="letter">
					<div>Ghi lại cho ${letter.username},</div>
					<h2>${letter.title}</h2>
					<p class="page-text" id="page-text"></p>
					<span class="page-number" id="page-number"></span>
					<div class="page-controls">
						<button id="previous-page" type="button">← Trang trước</button>
						<button id="next-page" type="button">Trang tiếp →</button>
					</div>
				</article>
			</div>
		</section>
		<button class="close" id="close" type="button">Về trang đầu</button>
	</main>
`;
const envelope = document.querySelector('#envelope');
const closeButton = document.querySelector('#close');
const pageText = document.querySelector('#page-text');
const pageNumber = document.querySelector('#page-number');
const previousPage = document.querySelector('#previous-page');
const nextPage = document.querySelector('#next-page');
const signaturePage = pages.length;
let currentPage = 0;

function showPage() {
	pageText.textContent = currentPage === signaturePage ? letter.signature : pages[currentPage];
	pageNumber.textContent = currentPage === signaturePage ? 'Trang cuối' : `Trang ${currentPage + 1} / ${pages.length}`;
	previousPage.disabled = currentPage === 0;
	nextPage.disabled = currentPage === signaturePage;
}

const openLetter = () => { envelope.classList.add('open'); showPage(); };
openLetter();
closeButton.addEventListener('click', () => { currentPage = 0; showPage(); });
previousPage.addEventListener('click', (event) => { event.stopPropagation(); if (currentPage > 0) { currentPage--; showPage(); } });
nextPage.addEventListener('click', (event) => { event.stopPropagation(); if (currentPage < signaturePage) { currentPage++; showPage(); } });
showPage();