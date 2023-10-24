import Logo from '@/components/shared/Logo'
import React from 'react'

function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content my-8 rounded-xl">
            <aside className=''>
                <Logo
                    width={100}
                    height={100}
                />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ <br /> لورم ایپسوم متن ساختگی با تولید سادگی </p>
            </aside>
            <nav>
                <header className="footer-title">لینک سریع</header>
                <a className="link link-hover">خانه</a>
                <a className="link link-hover">ارتباط با ما</a>
                <a className="link link-hover">درباره ما</a>
                <a className="link link-hover">بلاگ</a>
            </nav>
            <nav>
                <header className="footer-title">تماس با ما</header>
                <a className="link link-hover">8 صبح تا 5 غروب</a>
                <a className="link link-hover">استان سیستان وبلوچستان زاهدان پارک علم وفناوری</a>
                <a className="link link-hover">054-467894</a>
                <a className="link link-hover">info@gmail.ir</a>
            </nav>
        </footer>
    )
}

export default Footer