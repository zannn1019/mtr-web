document.addEventListener('DOMContentLoaded', () => {

    //? INI UNTUK BAGIAN CHECKBOX
    const selectOptions = document.querySelectorAll(".select-options");
    const mailInbox = document.getElementById("mail-inbox");
    const buttonActionInbox = document.querySelectorAll(".btn-action-inbox");
    const mailInboxCheckbox = mailInbox.querySelectorAll(".inbox input");

    selectOptions.forEach(select => select.addEventListener("click", () => {
        checkboxAction(select.dataset.select, mailInboxCheckbox);
    }));

    mailInboxCheckbox.forEach(checkbox => {
        checkbox.addEventListener("click", function () {
            checkCheckboxesStatus();
        });
    });

    function checkboxAction(dataSelect, checkboxes) {
        checkCheckboxesStatus();
        checkboxes.forEach(input => {
            switch (dataSelect) {
                case "none":
                    input.checked = false;
                    break;
                case "read":
                    input.checked = input.parentElement.classList.contains('is_read');
                    break;
                case "unread":
                    input.checked = !input.parentElement.classList.contains('is_read');
                    break;
                case "reverse":
                    input.checked = !input.checked;
                    break;
                default:
                    input.checked = true;
                    break;
            }
        });
    }

    function checkCheckboxesStatus() {
        setTimeout(() => {
            const atLeastOneChecked = Array.from(mailInboxCheckbox).some(input => input.checked);
            if (atLeastOneChecked == true) {
                buttonActionInbox.forEach(btn => btn.classList.remove("hidden"))
            } else {
                buttonActionInbox.forEach(btn => btn.classList.add("hidden"))
            }
        }, 10);
    }

    //? INI UNTUK BAGIAN COPY TEXT
    const textCover = document.querySelectorAll(".text-copy");
    textCover.forEach(cover => {
        let text = cover.querySelector(".text").textContent;
        let copyBtn = cover.querySelector(".copy-btn");
        copyBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(text);
            copyBtn.setAttribute('disabled', 'disabled');
            copyBtn.textContent = "copied";
            setTimeout(() => {
                copyBtn.removeAttribute('disabled', 'disabled');
                copyBtn.textContent = "salin";
            }, 1000);
        })
    });

});
