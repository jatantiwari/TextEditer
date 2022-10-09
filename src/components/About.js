import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="container">
            <h2 >About Us</h2>
            <div id="collapseOne" className={`accordion-collapse collapse show bg-${props.mode}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className={`accordion-body`}>
                    <strong>Let's make your work easier. </strong>You can use TextEditer to covert your text to UpperCase, LowerCase and you can copy your conveted text by one click. You can also remove extra spaces from your text. You can also count number of words, sentences, character, paragraph and time to read that document.
                </div>
            </div>
            </div>

        </>

    )
}
