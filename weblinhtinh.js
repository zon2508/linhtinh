// Chỉnh nội dung bức thư tại đây.
const letter = {
	recipient: 'Đọc đi các bé',
	title: 'Dành ra vài phút plis',
	message: 'Từ khi lên lớp 6, chính cái năm đó đã khiến tôi trở thành một con người hoàn toàn khác. Tôi biết đến web sếch (riel) biết được các người bạn trong roblox (tựa game đầu tiên khiến có bạn bè dù là online và hiện giờ vẫn vậy) xong rồi nạp game, được nói chuyện với người nước ngoài,... rất nhiều điều. Có hội bạn đầu tiên làm tôi rất vui khi mà lúc đó gia đình tôi khi mà ba mẹ li hôn, cãi nhau. không được hòa thuận, dù điều kiện của tôi tốt hơn rất nhiều người nhưng lại không có tình phụ mẫu làm tôi đã phải trầm cảm suốt 2-3 năm trong thời kì khá là đen tối, đã có lúc tôi đã định 44(dù có thể bọn m cũng đã từng nhưng đây là câu chuyện của t nên là đọc thôi nha k phán xét) và cũng có khá nhiều suy nghĩ bẩn tưởi với con người(trust) và rồi khi lên cấp 3 thì t đã phải tự học cách chữa trầm cảm nhưng vẫn chưa được khỏi hẳn xong rồi t đã gặp một hội bạn nữa cũng đã làm hành trình học cấp 3 của tôi đặc sắc và thoát khỏi cảnh bị trầm cảm và bước ra khỏi các suy nghĩ tiêu cực và ovt. Cuộc đời t thì chuyển nhà gần 15 lần, chuyển trường 5 lần nên đó cũng là lí do t không có nhiều bạn bè và gia đình. Hiện nay t đã 18 tuổi rồi và giờ t phải học nhiều thứ ngoài xã hội hơn và phải chịu trách nhiệm lời nói của mình. Dù còn rất nhiều chuyện muốn kể nhưng t quá lười vậy nên sẽ kết bài luôn. Cảm ơn tất cả mọi người đã đồng hành cùng tôi từ trước tới nay, dù ngắn hay dài t đều trân trọng điều đấy, có thể rất nhiều ng không nhớ t nhưng t vẫn nhớ mọi người và quý mọi người nhiều. Một điều nữa.... về sau khi nào bố dư dả bố sẽ bao ăn tất cả các con', 
    signature: 'zon'
};

const styles = document.createElement('style');
styles.textContent = `
	:root { --green:#244b49; --soft-green:#d9ebe4; --coral:#e97859; --cream:#fffaf0; --paper:#fffefa; }
	* { box-sizing:border-box; }
	body { margin:0; min-height:100vh; display:grid; place-items:center; padding:20px; color:var(--green); font-family:Georgia,serif; background:radial-gradient(circle at 12% 18%,#fff2b8 0 10%,transparent 29%),linear-gradient(135deg,#cfe8e1 0%,#f7efe1 55%,#f6d7ca 100%); }
	.page { width:min(100%,680px); text-align:center; }
	.tag { color:var(--coral); font:700 .72rem Arial,sans-serif; letter-spacing:.18em; text-transform:uppercase; }
	h1 { margin:12px 0 8px; font-size:clamp(2.5rem,8vw,5rem); line-height:.92; letter-spacing:-.05em; }
	.help { margin:0 0 30px; color:#65807b; font: .9rem Arial,sans-serif; }
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
	.letter { position:absolute; z-index:2; left:5%; bottom:9px; width:90%; min-height:190px; padding:24px; border-radius:7px; background:var(--paper); box-shadow:0 5px 12px #45514c25; text-align:left; transition:transform .75s cubic-bezier(.2,.75,.3,1); }
	.letter h2 { margin:7px 0 12px; font-size:1.55rem; }
	.letter p { margin:0; font-size:1rem; line-height:1.6; }
	.letter .signature { margin-top:14px; color:#28736c; font-style:italic; }
	.open .flap { z-index:1; transform:rotateX(180deg); }
	.open .seal { opacity:0; }
	.open .letter { z-index:6; transform:translateY(-125px); }
	.open:hover { transform:translateY(-125px); }
	.close { margin-top:22px; padding:11px 17px; border:1px solid #a9c8be; border-radius:7px; color:#28736c; background:#ffffff80; cursor:pointer; font:700 .8rem Arial,sans-serif; }
	.close:hover { background:white; }
	@media (max-width:500px) { .stage { height:245px; } .envelope { height:190px; } .letter { min-height:165px; padding:18px; } .letter h2 { font-size:1.2rem; } .letter p { font-size:.88rem; } .open .letter { transform:translateY(-105px); } .open:hover { transform:translateY(-105px); } }
`;
document.head.appendChild(styles);

document.body.innerHTML = `
	<main class="page">
		<div class="tag">A little note for you</div>
		<h1>Bức thư nhỏ</h1>
		<p class="help">Chạm vào phong bì để mở thư</p>
		<section class="stage">
			<div class="envelope" id="envelope" role="button" tabindex="0" aria-label="Mở thư">
				<div class="base"></div>
				<article class="letter">
					<div>Gửi ${letter.recipient},</div>
					<h2>${letter.title}</h2>
					<p>${letter.message}</p>
					<p class="signature">${letter.signature}</p>
				</article>
				<div class="flap"></div>
				<div class="front"></div>
				<div class="seal">♥</div>
			</div>
		</section>
		<button class="close" id="close" type="button">Đóng thư lại</button>
	</main>
`;

const envelope = document.querySelector('#envelope');
const closeButton = document.querySelector('#close');
const openLetter = () => envelope.classList.add('open');

envelope.addEventListener('click', openLetter);
envelope.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openLetter(); }
});
closeButton.addEventListener('click', () => envelope.classList.remove('open'));
function taoDuongDan() {
  const link = document.createElement('a');
  link.href = 'https://thucuason.com';
  link.textContent = 'Chuyển hướng đến Google';
  
  // Chèn vào một khu vực cụ thể trên giao diện
  const khuVucHienThi = document.getElementById('https://thucuason.com');
  khuVucHienThi.appendChild(link);
}

// Gọi hàm để chạy
taoDuongDan();
