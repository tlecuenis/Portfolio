import "./contact.css"
import { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
export const Contact = () => {
    const [copyMail, setCopyMail] = useState(false)
    const [copyWpp, setCopyWpp] = useState(false)
    const [copyLin, setCopyLin] = useState(false)

    const handleCopyMail = (e) =>{
        e.preventDefault()
        setCopyMail(!copyMail)
    }
    const handleCopyWpp = (e) =>{
        e.preventDefault()
        setCopyWpp(!copyWpp)
    }
    const handleCopyLin = (e) =>{
        e.preventDefault()
        setCopyLin(!copyLin)
    }

    return(
        <div className="contact" id="contact">
            <p className="contact__title">Contact</p>
            <div className="contact__grid">
                
                <div className="contact__container">
                    <CopyToClipboard text="+5491126484410">
                        <div className="contact__wpp contact-flex" title="Copy wpp!" onClick={handleCopyWpp}>
                            <p className="contact-bolder">Whatsapp: </p>
                            <p className="contact-information">+5491126484410</p>
                            {copyWpp && <span className="copied-1">Copied!</span>}
                        </div>
                    </CopyToClipboard>        
                
                    <CopyToClipboard text="tlecuenis@gmail.com">
                        <div className="contact__email contact-flex" title="Copy email!" onClick={handleCopyMail}>
                            <p className="contact-bolder">Email: </p>
                            <p className="contact-information">tlecuenis@gmail.com</p>
                            {copyMail && <span className="copied-1">Copied!</span>}
                        </div>
                    </CopyToClipboard>

                    <CopyToClipboard text="/tomaslecuenis">
                        <div className="contact__lin contact-flex" title="Copy linkedin!" onClick={handleCopyLin}>
                            <p className="contact-bolder">LinkedIn: </p>
                            <p className="contact-information">/tomaslecuenis</p>
                            {copyLin && <span className="copied-1">Copied!</span>}
                        </div>
                    </CopyToClipboard>
                    
                </div>
                {/* <div className="contact__form">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" id="email" />
                    <label htmlFor="description">Description</label>
                    <textarea name="" id="description" cols="30" rows="10" placeholder="Description" ></textarea>
                    <button >Submit</button>
                </div> */}
            </div>
        </div>
    )
    
}