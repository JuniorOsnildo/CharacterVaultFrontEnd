// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function SheetModal({isOpen,setModalOpen}: ModalProps) {

    if (isOpen) {
        return (
            <div className="background">
                <div className="container">
                    <div className="button-x">
                        <button onClick={setModalOpen}></button>
                    </div>
                    <div className="fields">
                        <p>nome</p><input type="text"/>
                        <p>raça</p><input type="text"/>
                        <p>origem</p><input type="text"/>
                        <p>classe</p><input type="text"/>
                        <p>nivel</p><input type="text"/>
                        <p>hp</p><input type="text"/>
                        <p>mana</p><input type="text"/>

                    </div>
                </div>
            </div>
        )

    }

    return null
}