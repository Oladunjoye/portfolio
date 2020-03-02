import React from 'react'

export default function Footer() {
    let date = new Date()
    return (
        <footer className="copyright">
            <div className="up" id="up">
        <i className="fa fa-chevron-up"></i>
            </div>

    <p> Shonubi Joye &copy; {date.getFullYear()}</p>

        </footer>
    )
}
