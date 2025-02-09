// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Modal({isOpen}) {

    if (isOpen) {
        return (
            <div className="background">
                <div className="container">
                    teste
                </div>
            </div>
        )

    }

    return null
}