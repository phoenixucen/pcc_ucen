// List your gallery images here (add more as needed)
const imageList = [
    "20231115_134301.png",
    "IMG_COM_20231113_1355_22_7650.png",
    "Picture4.png",
    "IMG_COM_20231113_1355_23_0001.jpg",
    "IMG-20231125-WA0005.jpg",
    "IMG-20231125-WA0006.jpg",
    "IMG-20240205-WA0005.jpg",
    "IMG-20240205-WA0006.jpg",
    "IMG-20240205-WA0007.jpg",
    "IMG-20240205-WA0009.jpg",
    "IMG-20240205-WA0010.jpg",
    "PCC_Prizes_Prad_Akr_Mohan.jpg",
    "IMG-20240205-WA0011.jpg",
    "IMG-20240205-WA0012.jpg",
    "IMG-20240205-WA0014.jpg",
    "IMG-20240205-WA0017.jpg",
    "IMG-20240205-WA0018.jpg",
    "IMG-20240205-WA0019.jpg",
    "IMG-20240205-WA0020.jpg",
    "IMG-20240205-WA0021.jpg",
    "Mohan-lecturing.jpg",
    "Picsart_23-02-22_21-04-15-074.jpg",
    "Picsart_23-11-15_14-01-10-298.png"
];

const galleryGrid = document.getElementById('gallery-grid');

imageList.forEach((img, idx) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
        <img src="assets/images/gallery images/${img}" alt="Gallery Image ${idx+1}" class="gallery-img" />
        <div class="gallery-caption">Image ${idx+1}</div>
    `;
    // Optional: Add click to enlarge
    item.addEventListener('click', () => {
        showModal(`assets/images/gallery images/${img}`);
    });
    galleryGrid.appendChild(item);
});

// Modal for enlarged image
function showModal(src) {
    let modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="modal-bg"></div>
        <img src="${src}" class="modal-img" />
        <span class="modal-close">&times;</span>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').onclick = () => {
        modal.remove();
        document.body.style.overflow = '';
    };
    modal.querySelector('.modal-bg').onclick = () => {
        modal.remove();
        document.body.style.overflow = '';
    };
}

// Modal styles
const style = document.createElement('style');
style.innerHTML = `
.gallery-modal {
    position: fixed; top:0; left:0; width:100vw; height:100vh;
    background: rgba(0,0,0,0.7); z-index:2000; display:flex; align-items:center; justify-content:center;
    animation: fadeInModal 0.4s;
}
@keyframes fadeInModal { 0%{opacity:0;} 100%{opacity:1;} }
.modal-img {
    max-width: 90vw; max-height: 80vh; border-radius: 18px; box-shadow: 0 8px 32px #2228;
    animation: popIn 0.5s;
}
.modal-close {
    position: absolute; top: 32px; right: 48px; font-size: 2.5rem; color: #fff; cursor: pointer; font-weight: bold;
    text-shadow: 0 2px 8px #222;
}
.modal-bg {
    position: absolute; top:0; left:0; width:100vw; height:100vh; background: transparent;
}
`;
document.head.appendChild(style);