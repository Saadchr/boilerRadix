"use client";
import { Container, Text, Flex, Heading, Box, Card } from "@radix-ui/themes";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className=" z-[1] flex w-screen justify-center">
      <NavigationMenu.List className="center  m-0 flex list-none rounded-[6px] bg-white p-1 ">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 leading-none outline-none  focus:shadow-[0_0_0_2px]">
            <Text size={"1"}>Paillasson</Text>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className=" data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-screen ">
            <Container size={"4"} p={"4"}>
              <Flex pt={"5"} direction={"row"}>
                <Box>
                  <Flex direction={"column"} gap={"4"}>
                    <Text color="gray" size={"1"}>
                      {" "}
                      Paillassons{" "}
                    </Text>
                    <Flex direction={"column"} gap={"3"}>
                      <Link href={"./paillasons"}>
                        <Card asChild variant="ghost">
                          <Link href="./">
                            <Heading size={"6"}> Paillassons simples </Heading>
                          </Link>
                        </Card>
                      </Link>
                      <Link href={"./paillasons"}>
                        <Heading size={"6"}>
                          {" "}
                          Paillassons personnalisables{" "}
                        </Heading>
                      </Link>
                      <Link href={"./paillasons"}>
                        <Heading size={"6"}> Paillassons A Motifs </Heading>
                      </Link>
                      <Link href={"./paillasons"}>
                        <Heading size={"6"}>
                          {" "}
                          Paillassons Pour Entreprises{" "}
                        </Heading>
                      </Link>
                    </Flex>
                  </Flex>
                </Box>
                <Box>
                  <Link href="https://stitches.dev/" title="Stitches">
                    <Text>
                      CSS-in-JS with best-in-class developer experience.
                    </Text>
                  </Link>
                  <Link href="/colors" title="Colors">
                    Beautiful, thought-out palettes with auto dark mode.
                  </Link>
                  <Link href="https://icons.radix-ui.com/" title="Icons">
                    A crisp set of 15x15 icons, balanced and consistent.
                  </Link>
                </Box>
              </Flex>
            </Container>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 leading-none outline-none  focus:shadow-[0_0_0_2px]">
            <Text size={"1"}>Tapis</Text>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className=" data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-screen ">
            <Container size={"4"} p={"4"}>
              <Flex pt={"5"} direction={"row"}>
                <Box>
                  <Flex direction={"column"} gap={"4"}>
                    <Text color="gray" size={"1"}>
                      Tapis & cie{" "}
                    </Text>
                    <Flex direction={"column"} gap={"3"}>
                      <Link href={"./paillasons"}>
                        <Card asChild variant="ghost">
                          <Link href="./">
                            <Heading size={"6"}> Tapis Fluffys </Heading>
                          </Link>
                        </Card>
                      </Link>
                      <Link href={"./paillasons"}>
                        <Heading size={"6"}> Tapis Modernes </Heading>
                      </Link>
                      <Link href={"./paillasons"}>
                        <Heading size={"6"}> Tapis Pour Bébés </Heading>
                      </Link>
                      <Link href={"./paillasons"}>
                        <Heading size={"6"}>
                          {" "}
                          Paillassons Pour Entreprises{" "}
                        </Heading>
                      </Link>
                    </Flex>
                  </Flex>
                </Box>
                <Box>
                  <Link href="" title="Stitches">
                    <Text>
                      CSS-in-JS with best-in-class developer experience.
                    </Text>
                  </Link>
                  <Link href="/colors" title="Colors">
                    Beautiful, thought-out palettes with auto dark mode.
                  </Link>
                  <Link href="https://icons.radix-ui.com/" title="Icons">
                    A crisp set of 15x15 icons, balanced and consistent.
                  </Link>
                </Box>
              </Flex>
            </Container>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="  perspective-[2000px] absolute top-[42px] left-0 flex w-full ">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative  h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";

export default NavigationMenuDemo;
