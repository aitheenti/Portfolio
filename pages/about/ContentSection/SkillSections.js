function SkillsSection() {
    return (
        <div className="skillsSection flex flex-col w-auto justify-center justify-items-center m-0 bg-black text-white items-center w-full">
            Here are my skills that I'm proud of
            <ul className="flex flex-col w-auto justify-between text-xl p-8 w-2/5">
                <div className="left-col m-2">
                    <li> UI/UX Design Visual</li>
                    <li> Prototyping</li>
                    <li> Design Thinking</li>
                    <li> User Research</li>
                    <li> Usability testing</li>
                </div>
                <div className="right-col m-2">
                    <li> Graphic Design</li>
                    <li> Typography</li>
                    <li> Sketch</li>
                    <li> Video Production</li>
                    <li> Photography</li>
                </div>
            </ul>

        </div>
    )
}

export default SkillsSection