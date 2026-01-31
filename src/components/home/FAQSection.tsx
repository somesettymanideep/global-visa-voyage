import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the basic requirements to study abroad?",
    answer:
      "Requirements vary by country and university, but generally include a valid passport, academic transcripts, English proficiency test scores (IELTS/TOEFL), statement of purpose, and letters of recommendation. Some programs may also require standardized test scores like GRE or GMAT.",
  },
  {
    question: "How long does the visa application process take?",
    answer:
      "Visa processing times vary by country. Generally, student visas take 2-8 weeks to process. We recommend applying at least 3 months before your intended travel date to account for any delays or additional documentation requests.",
  },
  {
    question: "Can I work while studying abroad?",
    answer:
      "Most countries allow international students to work part-time (typically 20 hours per week) during their studies. Countries like Australia, Canada, and the UK have generous post-study work permits that allow you to stay and work after graduation.",
  },
  {
    question: "What is the cost of studying abroad?",
    answer:
      "Costs vary significantly by country and institution. Tuition ranges from $10,000 to $50,000 per year depending on the program. Living expenses typically add another $10,000-$20,000 annually. Many scholarships and financial aid options are available to help reduce costs.",
  },
  {
    question: "How do you help with university selection?",
    answer:
      "Our expert counselors analyze your academic profile, career goals, budget, and preferences to recommend universities that are the best fit for you. We consider factors like program rankings, location, scholarship opportunities, and post-graduation prospects.",
  },
  {
    question: "Do you provide scholarship assistance?",
    answer:
      "Yes! We help identify and apply for scholarships, grants, and financial aid opportunities. Many of our students have received partial to full scholarships at top universities worldwide. We guide you through the entire scholarship application process.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-2 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about studying abroad, visa processes, and our services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
