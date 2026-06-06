type ConfirmModalProps = {
    open: boolean;
    title?: string;
    description?: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export function ConfirmModal({
                                 open,
                                 title = "Are you sure?",
                                 description = "This action cannot be undone.",
                                 onConfirm,
                                 onCancel,
                             }: ConfirmModalProps) {
    if (!open) return null;

    return (
        <div className="confirm-modal">
            <div className={"inner-confirm-modal"}>
                <h2 dangerouslySetInnerHTML={{
                    __html: title,
                }}></h2>
                <p className={"modal-desc"}>{description}</p>

                <div style={{display: "flex", gap: 10}}>
                    <button onClick={onCancel} className={"btn info sm"}>Close</button>
                    <button onClick={onConfirm} className={"btn  success sm"}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

