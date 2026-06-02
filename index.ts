import { EnrollmentStatus, describeEnrollment } from "./models/enrollment.model";
import { AssessmentItem, calculateGrade } from "./models/assessment.model";
import { Temporal } from "@js-temporal/polyfill";
import { CourseStatus, describeCourse } from "./models/course.model";
const quiz: AssessmentItem = {
id: "QUIZ-001",
kind: "quiz",
title: "SQL Basics",
correctAnswers: 8,
totalQuestions: 10,
};
const lab: AssessmentItem = {
id: "LAB-001",
kind: "lab",
title: "REST API Project",
functionalityScore: 85,
codeQualityScore: 90,
};
console.log(`Quiz grade: ${calculateGrade(quiz)}%`); // 80
console.log(`Lab grade: ${calculateGrade(lab)}%`); // 87
console.log(`Lab grade: ${calculateGrade(lab)}%`); // 87
// Verify readonly try this line and check the compiler error:
// quiz.id = "QUIZ-999";/
// ERROR: Cannot assign to 'id' because it is a read-only property

const pending: EnrollmentStatus = {
status: "PENDING",
requestedAt: Temporal.Now.instant() as any,
studentId: "STU-001",
courseId: "CRS-101",
};
console.log(describeEnrollment(pending));


const webDev: CourseStatus = {
status: "ACTIVE",
enrolledCount: 28,
startDate: Temporal.PlainDate.from("2026-09-01"),
};
console.log(describeCourse(webDev));