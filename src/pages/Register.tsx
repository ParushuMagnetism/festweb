import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, "Invalid phone number"),
  college: z.string().min(2, "College name is required").max(200),
  department: z.string().min(2, "Department is required").max(100),
  event: z.string().min(1, "Please select an event"),
  teamSize: z.string().optional(),
  additionalInfo: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      college: "",
      department: "",
      event: "",
      teamSize: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Store in localStorage for now (can be connected to backend later)
    const registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
    registrations.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem("registrations", JSON.stringify(registrations));

    setIsSubmitted(true);
    toast({
      title: "Registration Successful!",
      description: "We've received your registration. Check your email for confirmation.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center glass-card p-12 rounded-2xl">
            <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse" />
            <h1 className="mb-6 gradient-text">Registration Successful!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for registering for TechFiesta 2025! We've sent a confirmation email with 
              all the event details. See you at the fest!
            </p>
            <Button
              size="lg"
              className="bg-gradient-festive hover:shadow-glow-primary"
              onClick={() => {
                setIsSubmitted(false);
                form.reset();
              }}
            >
              Register for Another Event
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center mb-6">Register for TechFiesta</h1>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Fill in your details to secure your spot at the biggest fest of the year!
          </p>

          <div className="glass-card p-8 rounded-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="college"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>College/University *</FormLabel>
                        <FormControl>
                          <Input placeholder="ABC College" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department *</FormLabel>
                        <FormControl>
                          <Input placeholder="Computer Science" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="event"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Event *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose an event" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hackathon">Hackathon 24</SelectItem>
                          <SelectItem value="robot-wars">Robot Wars</SelectItem>
                          <SelectItem value="web-design">Web Design Championship</SelectItem>
                          <SelectItem value="battle-bands">Battle of Bands</SelectItem>
                          <SelectItem value="dance">Dance Face-Off</SelectItem>
                          <SelectItem value="fashion">Fashion Show</SelectItem>
                          <SelectItem value="cricket">Cricket Tournament</SelectItem>
                          <SelectItem value="basketball">Basketball 3x3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="teamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Size (if applicable)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 4 members" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special requirements or questions?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-festive hover:shadow-glow-primary transition-all"
                >
                  Complete Registration
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
