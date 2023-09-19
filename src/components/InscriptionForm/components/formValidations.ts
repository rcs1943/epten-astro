import { helpHttp } from "../../../services/helpHttp";
export function formValidations() {
    const $inputs: NodeListOf<HTMLInputElement> =
        document.querySelectorAll("[data-required]");
    const $select: HTMLSelectElement =
        document.querySelector("#custom-drop-down")!;
    let isValidated = true;
    $inputs.forEach(input => {
        const $span = document.createElement("span");
        $span.id = input.name;
        $span.textContent = input.dataset.title!;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });
    $select.addEventListener("change", e => {
        const $span = document.getElementById($select.name);
        if ($select.value && $span) {
            $span.classList.add("none");
        }
    });
    document.addEventListener("keyup", (e: KeyboardEvent) => {
        if ((e.target as HTMLInputElement).matches("[data-required]")) {
            let $input = e.target as HTMLInputElement,
                pattern = $input.dataset.pattern!,
                regex = new RegExp(pattern);
            const $span = document.getElementById($input.name)!;
            if ($input.value.length > 0 && $input.dataset.regex) {
                $span.textContent = $input.dataset.regex;
                isValidated = false;
                return !regex.exec($input.value)
                    ? $span.classList.remove("none")
                    : $span.classList.add("none");
                // return !regex.exec($input.value)
                //     ? (inputErrors = { ...inputErrors, [$input.name]: "" })
                //     : (inputErrors = {
                //           ...inputErrors,
                //           [$input.name]: $input.dataset.regex,
                //       });
            }
            $span.textContent = $input.dataset.title!;
            return $span.classList.remove("none");
            // return (inputErrors = {
            //     ...inputErrors,
            //     [$input.name]: $input.dataset.title,
            // });
        }
    });

    document.addEventListener("submit", e => {
        e.preventDefault();
        const $modal = document.querySelector("#thanks-modal");
        const b = document.body;
        let formData!: unknown[];
        let errorCounter = 0;
        $inputs.forEach(input => {
            if (input.value.length === 0 || !input.value) {
                document.getElementById(input.name)!.classList.remove("none");
                isValidated = false;
            }
            if (
                !document.getElementById(input.name)!.classList.contains("none")
            ) {
                errorCounter++;
            }
            formData = { ...formData, [input.name]: input.value };
        });
        if (errorCounter === 0) {
            isValidated = true;
        }
        //https://formsubmit.co/ajax/ventas@epten.edu.pe
        if (isValidated === true) {
            helpHttp()
                .post("https://formsubmit.co/ajax/kerwints6@gmail.com", {
                    body: formData,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                })
                .then(res => {
                    if (!$modal) return;
                    $modal.classList.add("opened");
                    b.classList.add("opened");
                });
        }
    });
}

formValidations();