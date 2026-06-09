import { redirect, RedirectType } from "next/navigation";

export default function OldContecstnayaRedirect() {
  redirect("/services/kontekstnaya-reklama", RedirectType.replace);
}
