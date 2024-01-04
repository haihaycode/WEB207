var txt = 'Với Đội Ngũ Giảng Viên trẻ đầy năng động kèm theo những bài học luôn được cập nhật mới mỗi ngày';
var speed = 50;
var i = 0;
var waitForReset = false; // Biến để kiểm tra xem khi nào cần đợi trước khi đánh lại

function typeWriter() {
    if (i < txt.length) { // Nếu chưa đánh xong văn bản
        document.getElementById("typed-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else { // Nếu đã đánh xong văn bản
        if (waitForReset) { // Nếu cần đợi trước khi bắt đầu đánh lại
            setTimeout(resetAndType, 3000); // Chờ 3 giây trước khi đánh lại
        } else {
            resetAndType(); // Bắt đầu đánh lại ngay lập tức
        }
    }
}

function resetAndType() {
    i = 0; // Thiết lập lại giá trị của i để bắt đầu từ đầu
    document.getElementById("typed-text").innerHTML = ''; // Xóa văn bản đã hiển thị để bắt đầu từ đầu
    waitForReset = false; // Đặt lại biến waitForReset
    typeWriter(); // Gọi lại hàm typeWriter để bắt đầu đánh chữ
}

typeWriter(); // Gọi hàm typeWriter để bắt đầu hiệu ứng gõ chữ


function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
    let paths = document.querySelectorAll("path");
    let mode = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }
}
setTextAnimation(0.1, 3, 1, 'ease-out', '#ffffff', true);