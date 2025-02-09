// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Modal({isOpen,setModalOpen}: ModalProps) {

    if (isOpen) {
        return (
            <div className="background">
                <div className="container">
                    <button onClick={setModalOpen}></button>
                </div>
            </div>
        )

    }

    return null
}