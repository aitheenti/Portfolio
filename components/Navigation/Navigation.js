export default function Navigation() {
    const menuLinks = [
        'About Me',
        'UI/UX Design',
        'Content Creation',
        'Resume',
        'Contact'
    ]

    return (
        <div>
            <div class="w-1/12">
                <img src="/NK.svg" />
            </div>
            <div class="w-11/12 flex justify-end justify-evenly">
                {menuLinks?.map(link => <h2 className="text-3xl font-bold underline">{link}</h2>)}
            </div>
        </div>

    )
}