import { TipTapEditor } from "@/components/Editor";
import { SelectCategory } from "@/components/SelectCategory";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function sellRoute() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card className="p-8 rounded-2xl">
        <form>
          <CardHeader>
            <CardTitle>Sell your product with ease</CardTitle>
            <CardDescription>
              Please describe your product here in details so users can know
              about it
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input type="text" placeholder="Name of your product" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Catgory</Label>
              <SelectCategory />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Price</Label>
              <Input type="number" placeholder="$2.00" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Small summary</Label>
              <Textarea placeholder="Please describe your product shortly..." />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Description</Label>
              <TipTapEditor />
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}
