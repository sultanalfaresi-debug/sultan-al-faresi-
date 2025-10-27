function checkAnswersDetailed() {
    const correct = {
        q1: "a",
        q2: "a",
        q3: "a",
        q4: "a",
        q5: "a"
    };

    let score = 0;
    // per-soal feedback
    for (let i = 1; i <= 5; i++) {
        const q = 'q' + i;
        const chosen = document.querySelector(`input[name="${q}"]:checked`);
        const feedbackElId = 'fb' + i;
        let fbEl = document.getElementById(feedbackElId);
        if (!fbEl) {
            // buat elemen feedback jika belum ada
            fbEl = document.createElement('p');
            fbEl.id = feedbackElId;
            const form = document.getElementById('quizForm') || document.getElementById('quiz');
            form.insertAdjacentElement('beforeend', fbEl);
        }

        if (chosen) {
            if (chosen.value === correct[q]) {
                fbEl.textContent = `Soal ${i}: ✅ Benar`;
                fbEl.style.color = 'green';
                score++;
            } else {
                fbEl.textContent = `Soal ${i}: ❌ Salah — Jawaban benar: "${correct[q].toUpperCase()}"`;
                fbEl.style.color = 'red';
            }
        } else {
            fbEl.textContent = `Soal ${i}: ⚠️ Belum memilih jawaban — Jawaban benar: "${correct[q].toUpperCase()}"`;
            fbEl.style.color = 'orange';
        }
    }

    // total score
    const result = document.getElementById("result");
    if (result) {
        result.textContent = `Nilai Anda: ${score}/5`;
        result.style.fontWeight = "bold";
        result.style.color = score >= 4 ? "green" : "red";
    } else {
        alert(`Nilai Anda: ${score}/5`);
    }
}