import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export default function Header({ profile }) {
  const { name, title, picture, contact } = profile;

  return (
    <header className="border-b-2 border-border pb-6">
      <div className="flex items-start gap-6">
        <img
          src={picture}
          className="h-[120px] w-[120px] rounded-full border-2 border-border object-cover"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="mb-4 text-lg text-muted-foreground">{title}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Item icon={Mail} value={contact.email} />
            <Item icon={Phone} value={contact.phone} />
            <Item icon={MapPin} value={contact.location} />
            <Item icon={Linkedin} value={contact.linkedin} />
            <Item icon={Github} value={contact.github} />
          </div>
        </div>
      </div>
    </header>
  );
}

function Item({ icon: Icon, value }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4" />
      <span>{value}</span>
    </div>
  );
}
