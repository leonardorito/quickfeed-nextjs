"use client";

import { useState } from "react";
import Link from "next/link";

// Branding
import { Logo } from "@/components/ui/logo";

// Buttons & Actions
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Form Inputs
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

// Data Display
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

// Feedback
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

// Overlays
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// Navigation & Layout
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";

// Icons
import {
  AlertCircle,
  Bold,
  CalendarIcon,
  ChevronDown,
  Info,
  Italic,
  MoreHorizontal,
  Underline,
  Zap,
} from "lucide-react";

// --- Layout helpers ---

function ShowcaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function ShowcaseItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">{label}</h3>
      <div>{children}</div>
    </div>
  );
}

// --- Main page ---

export default function ShowcasePage() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchOn, setSwitchOn] = useState(false);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option-1");
  const [selectValue, setSelectValue] = useState("");
  const [progressValue] = useState(66);
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(new Date());
  const [otpValue, setOtpValue] = useState("");

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        {/* Sticky Header */}
        <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
            <Logo />
            <div className="flex items-center gap-3">
              <Badge variant="secondary">~42 components</Badge>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-10 space-y-16">
          {/* ===== 1. BRANDING ===== */}
          <ShowcaseSection title="Branding">
            <ShowcaseItem label="Logo — sizes">
              <div className="flex items-center gap-6">
                <Logo size="sm" />
                <Logo size="default" />
                <Logo size="lg" />
                <Logo size="xl" />
              </div>
            </ShowcaseItem>
            <ShowcaseItem label="Logo — icon only">
              <div className="flex items-center gap-4">
                <Logo iconOnly size="sm" />
                <Logo iconOnly size="default" />
                <Logo iconOnly size="lg" />
              </div>
            </ShowcaseItem>
          </ShowcaseSection>

          <Separator />

          {/* ===== 2. BUTTONS & ACTIONS ===== */}
          <ShowcaseSection title="Buttons & Actions">
            <ShowcaseItem label="Button — variants">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="glow">Glow</Button>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Button — sizes">
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
                <Button size="icon"><Zap className="h-4 w-4" /></Button>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Button — loading">
              <div className="flex items-center gap-3">
                <Button loading>Loading</Button>
                <Button variant="outline" loading>Loading</Button>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Toggle">
              <div className="flex items-center gap-3">
                <Toggle aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </Toggle>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="ToggleGroup">
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </ShowcaseItem>
          </ShowcaseSection>

          <Separator />

          {/* ===== 3. FORM INPUTS ===== */}
          <ShowcaseSection title="Form Inputs">
            <ShowcaseItem label="Input — variants & sizes">
              <div className="grid gap-4 max-w-sm">
                <Input placeholder="Default input" />
                <Input placeholder="Small input" inputSize="sm" />
                <Input placeholder="Large input" inputSize="lg" />
                <Input label="With label" placeholder="Labeled input" />
                <Input
                  label="With error"
                  placeholder="Error state"
                  error="This field is required"
                />
                <Input
                  label="With hint"
                  placeholder="Hint state"
                  hint="We'll never share your email."
                />
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Textarea">
              <div className="max-w-sm">
                <Textarea placeholder="Type your message here..." />
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Checkbox">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={checked}
                  onCheckedChange={(v) => setChecked(v === true)}
                />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="RadioGroup">
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-1" id="r1" />
                  <Label htmlFor="r1">Option 1</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-2" id="r2" />
                  <Label htmlFor="r2">Option 2</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-3" id="r3" />
                  <Label htmlFor="r3">Option 3</Label>
                </div>
              </RadioGroup>
            </ShowcaseItem>

            <ShowcaseItem label="Select">
              <div className="max-w-sm">
                <Select value={selectValue} onValueChange={setSelectValue}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="twitter">Twitter / X</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="threads">Threads</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Switch">
              <div className="flex items-center gap-2">
                <Switch
                  id="dark-mode"
                  checked={switchOn}
                  onCheckedChange={setSwitchOn}
                />
                <Label htmlFor="dark-mode">
                  Dark mode: {switchOn ? "On" : "Off"}
                </Label>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Slider">
              <div className="max-w-sm space-y-2">
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                />
                <p className="text-sm text-muted-foreground">
                  Value: {sliderValue[0]}
                </p>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Calendar">
              <Calendar
                mode="single"
                selected={calendarDate}
                onSelect={setCalendarDate}
                className="rounded-md border border-border w-fit"
              />
            </ShowcaseItem>

            <ShowcaseItem label="InputOTP">
              <div className="space-y-2">
                <InputOTP maxLength={6} value={otpValue} onChange={setOtpValue}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-sm text-muted-foreground">
                  Value: {otpValue || "(empty)"}
                </p>
              </div>
            </ShowcaseItem>
          </ShowcaseSection>

          <Separator />

          {/* ===== 4. DATA DISPLAY ===== */}
          <ShowcaseSection title="Data Display">
            <ShowcaseItem label="Badge — variants">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Avatar">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">QF</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Card — variants">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Default</CardTitle>
                    <CardDescription>Standard card style</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Card content goes here.</p>
                  </CardContent>
                </Card>
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Elevated</CardTitle>
                    <CardDescription>With shadow lift</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Hover to see the effect.</p>
                  </CardContent>
                </Card>
                <Card variant="interactive">
                  <CardHeader>
                    <CardTitle>Interactive</CardTitle>
                    <CardDescription>Clickable card</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Hover for border color.</p>
                  </CardContent>
                </Card>
                <Card variant="glow">
                  <CardHeader>
                    <CardTitle>Glow</CardTitle>
                    <CardDescription>Brand glow effect</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Primary color glow.</p>
                  </CardContent>
                </Card>
                <Card variant="ghost">
                  <CardHeader>
                    <CardTitle>Ghost</CardTitle>
                    <CardDescription>No border or background</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Transparent card.</p>
                  </CardContent>
                </Card>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Table">
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Platform</TableHead>
                      <TableHead>Posts</TableHead>
                      <TableHead>Engagement</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Twitter / X</TableCell>
                      <TableCell>142</TableCell>
                      <TableCell>4.2%</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">Active</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">LinkedIn</TableCell>
                      <TableCell>87</TableCell>
                      <TableCell>6.8%</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">Active</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Instagram</TableCell>
                      <TableCell>23</TableCell>
                      <TableCell>2.1%</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="outline">Paused</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </ShowcaseItem>

            <ShowcaseItem label="Separator">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Above</p>
                <Separator />
                <p className="text-sm text-muted-foreground">Below</p>
              </div>
              <div className="flex h-6 items-center gap-4 mt-4">
                <span className="text-sm">Left</span>
                <Separator orientation="vertical" />
                <span className="text-sm">Right</span>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Skeleton">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Progress">
              <div className="max-w-sm space-y-2">
                <Progress value={progressValue} />
                <p className="text-sm text-muted-foreground">{progressValue}%</p>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="AspectRatio">
              <div className="max-w-xs">
                <AspectRatio ratio={16 / 9}>
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
                    <span className="text-sm text-muted-foreground">16:9</span>
                  </div>
                </AspectRatio>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Carousel">
              <div className="max-w-xs mx-auto">
                <Carousel>
                  <CarouselContent>
                    {Array.from({ length: 5 }, (_, i) => (
                      <CarouselItem key={i}>
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{i + 1}</span>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </ShowcaseItem>

            <ShowcaseItem label="Resizable">
              <div className="max-w-lg">
                <ResizablePanelGroup direction="horizontal" className="min-h-[120px] rounded-lg border border-border">
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm font-semibold">Panel A</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm font-semibold">Panel B</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </ShowcaseItem>
          </ShowcaseSection>

          <Separator />

          {/* ===== 5. FEEDBACK ===== */}
          <ShowcaseSection title="Feedback">
            <ShowcaseItem label="Alert — default">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the CLI.
                </AlertDescription>
              </Alert>
            </ShowcaseItem>

            <ShowcaseItem label="Alert — destructive">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again later.
                </AlertDescription>
              </Alert>
            </ShowcaseItem>

            <ShowcaseItem label="Sonner (Toast)">
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  onClick={() => toast("Post generated successfully!")}
                >
                  Default Toast
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    toast.success("Post published", {
                      description: "Your post has been shared on Twitter.",
                    })
                  }
                >
                  Success Toast
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    toast.error("Failed to publish", {
                      description: "Please check your connection and try again.",
                    })
                  }
                >
                  Error Toast
                </Button>
              </div>
            </ShowcaseItem>
          </ShowcaseSection>

          <Separator />

          {/* ===== 6. OVERLAYS ===== */}
          <ShowcaseSection title="Overlays">
            <div className="flex flex-wrap gap-3">
              {/* Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>
                      This is a dialog description. You can put any content here.
                    </DialogDescription>
                  </DialogHeader>
                  <p className="text-sm text-muted-foreground">
                    Dialog body content goes here.
                  </p>
                  <DialogFooter>
                    <Button>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* AlertDialog */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Open AlertDialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sheet Title</SheetTitle>
                    <SheetDescription>
                      This is a sheet panel that slides in from the right.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      Sheet content goes here. You can put forms, navigation, or
                      any other content.
                    </p>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Popover</h4>
                    <p className="text-sm text-muted-foreground">
                      A floating panel anchored to a trigger.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Tooltip */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover for Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>

              {/* HoverCard */}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Hover Card</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarFallback>QF</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">QuickFeed</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-powered social media post generator.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              {/* DropdownMenu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <MoreHorizontal className="h-4 w-4" />
                    Dropdown
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* ContextMenu */}
              <ContextMenu>
                <ContextMenuTrigger asChild>
                  <div className="flex h-10 items-center justify-center rounded-lg border border-dashed border-border px-4 text-sm text-muted-foreground cursor-default">
                    Right-click me
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Copy</ContextMenuItem>
                  <ContextMenuItem>Paste</ContextMenuItem>
                  <ContextMenuItem>Delete</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>

              {/* Drawer */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                    <DrawerDescription>
                      A bottom sheet drawer for mobile-friendly interactions.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4 pb-4">
                    <p className="text-sm text-muted-foreground">
                      Drawer content goes here. Swipe down or click outside to close.
                    </p>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>

            <ShowcaseItem label="Command">
              <div className="max-w-sm">
                <Command className="rounded-lg border border-border shadow-md">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem>
                        <Zap className="mr-2 h-4 w-4" />
                        <span>Generate Post</span>
                      </CommandItem>
                      <CommandItem>
                        <MoreHorizontal className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </ShowcaseItem>
          </ShowcaseSection>

          <Separator />

          {/* ===== 7. NAVIGATION & LAYOUT ===== */}
          <ShowcaseSection title="Navigation & Layout">
            <ShowcaseItem label="Tabs">
              <Tabs defaultValue="tab1" className="max-w-md">
                <TabsList>
                  <TabsTrigger value="tab1">Account</TabsTrigger>
                  <TabsTrigger value="tab2">Password</TabsTrigger>
                  <TabsTrigger value="tab3">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p className="text-sm text-muted-foreground pt-2">
                    Manage your account settings and preferences.
                  </p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p className="text-sm text-muted-foreground pt-2">
                    Change your password and security options.
                  </p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p className="text-sm text-muted-foreground pt-2">
                    Configure your notification preferences.
                  </p>
                </TabsContent>
              </Tabs>
            </ShowcaseItem>

            <ShowcaseItem label="Accordion">
              <Accordion type="single" collapsible className="max-w-md">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is QuickFeed?</AccordionTrigger>
                  <AccordionContent>
                    QuickFeed is an AI-powered social media post generator that
                    helps you create engaging content for multiple platforms.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does it work?</AccordionTrigger>
                  <AccordionContent>
                    Choose your platform, set your tone, and describe your topic.
                    Our AI will generate optimized posts for you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it free?</AccordionTrigger>
                  <AccordionContent>
                    QuickFeed offers a free tier with limited generations.
                    Upgrade for unlimited access and premium features.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ShowcaseItem>

            <ShowcaseItem label="Collapsible">
              <Collapsible
                open={collapsibleOpen}
                onOpenChange={setCollapsibleOpen}
                className="max-w-md space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">
                    3 saved posts
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ChevronDown className={`h-4 w-4 transition-transform ${collapsibleOpen ? "rotate-180" : ""}`} />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border border-border px-4 py-3 text-sm">
                  First saved post (always visible)
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border border-border px-4 py-3 text-sm">
                    Second saved post
                  </div>
                  <div className="rounded-md border border-border px-4 py-3 text-sm">
                    Third saved post
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </ShowcaseItem>

            <ShowcaseItem label="Breadcrumb">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Showcase</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </ShowcaseItem>

            <ShowcaseItem label="Pagination">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </ShowcaseItem>

            <ShowcaseItem label="ScrollArea">
              <ScrollArea className="h-48 max-w-sm rounded-md border border-border p-4">
                <div className="space-y-4">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="text-sm">
                      <p className="font-medium">Item {i + 1}</p>
                      <p className="text-muted-foreground">
                        Scrollable content item description.
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </ShowcaseItem>
          </ShowcaseSection>

          {/* Footer spacing */}
          <div className="h-16" />
        </main>

        <Toaster />
      </div>
    </TooltipProvider>
  );
}
