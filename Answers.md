# ANSWERS.md

## 1. How to Run

1. Download the project folder.
2. Open `index.html` in any browser.

No installation or frameworks required.

---

## 2. Stack & Design Choices

### Stack Choice

I used HTML, CSS, and JavaScript because:

- It is lightweight and beginner friendly.
- No installation is needed.
- Live calculations are simple to implement with JavaScript.
- Easy to understand and maintain.

### Design Decision 1

I separated the calculator and results into two boxes.

Reason:

- Users can edit values while seeing results clearly.
- It improves readability.

### Design Decision 2

I highlighted the selected tip button with a blue background.

Reason:

- Users can immediately see which tip percentage is active.
- It improves interaction clarity.

---

## 3. Responsive & Accessibility

### Responsive Design

#### Mobile (360px)

- Layout changes into one column.
- Tip buttons stack vertically.
- Inputs remain touch friendly.

#### Desktop (1440px)

- Calculator and results appear side by side.
- More spacing improves readability.

### Accessibility Handled

- Labels added for all inputs.
- Focusable buttons.
- Error messages appear near fields.

### Accessibility Skipped

I did not add screen-reader live announcements for updated totals.

Reason:

- I focused first on validation and responsiveness.

---

## 4. AI Usage

### AI Tool Used

- ChatGPT

### What I Used AI For

- Layout ideas
- Validation logic

### What I Changed

AI suggested fixed width cards.

I changed them to flexible boxes using:

```css

flex: 1;
min-width: 300px;
Reason:
•	It improved responsiveness on different screen sizes.
I also changed normal rounding to round-up logic:

Math.ceil((totalAmount / people) * 100) / 100
Reason:
•	This prevents underpayment during bill splitting.
________________________________________
5. Honest Gap
One thing still missing is better formatting for very large currency values.
With more time I would:
•	Add commas using toLocaleString()
•	Add smoother animations
•	Improve keyboard accessibility further
•	Add dark mode ```

