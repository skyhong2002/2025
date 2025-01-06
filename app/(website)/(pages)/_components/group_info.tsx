"use client";

import { motion } from "framer-motion";
import MemberInfo from "./member_info";

interface Group {
  group: {
    group: string;
    description: string;
    staff: (
      | {
          group: string;
          role: string;
          name: string;
          email: string;
          website?: string;
          rainbow?: boolean;
        }
      | {
          group: string;
          role: string;
          name: string;
          email: string;
          website?: undefined;
          rainbow?: boolean;
        }
    )[];
  };
}

export default function GroupInfo(groupObj: Group) {
  const group = groupObj.group;

  return (
    <motion.div
      key={group.group}
      initial={{ opacity: 0, filter: "blur(0.5em)" }}
      whileInView={{
        opacity: 1,
        filter: "blur(0)",
        transition: { duration: 0.25 },
      }}
      viewport={{ once: true }}
    >
      <section id={group.group} key={group.group} className="mb-8">
        <h2 className="text-h2-mobile font-bold md:text-h2">{group.group}</h2>
        <p>{group.description}</p>
        <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(78px,1fr))] gap-6 md:gap-12 md:gap-y-8">
          {group.staff.map((member) => (
            <MemberInfo key={member.email} member={member} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
