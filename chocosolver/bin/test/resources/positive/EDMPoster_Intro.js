scope({c0_AndroidDevice1:0, c0_input:0, c1_CPU:4, c1_OLED:0, c2_AMOLED:0, c2_CPU:4, c2_HSPA:0, c2_LCD:0, c2_touchscreen:0, c3_CPU:4, c3_GSM:0, c3_keyboard:0, c4_CPU:0, c5_CPU:4, c5_display:0, c6_CPU:2});
defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_AndroidDevice1 = Abstract("c0_AndroidDevice1");
c0_AndroidDevice = Abstract("c0_AndroidDevice");
c0_AndroidPhone = Abstract("c0_AndroidPhone").extending(c0_AndroidDevice);
c0_ExamplePhone1 = Clafer("c0_ExamplePhone1").withCard(1, 1);
c0_display = c0_ExamplePhone1.addChild("c0_display").withCard(1, 1);
c0_LCD = c0_display.addChild("c0_LCD").withCard(1, 1);
c0_GSM = c0_ExamplePhone1.addChild("c0_GSM").withCard(1, 1);
c0_CPU = c0_ExamplePhone1.addChild("c0_CPU").withCard(1, 1);
c0_keyboard = c0_ExamplePhone1.addChild("c0_keyboard").withCard(1, 1);
c0_ExamplePhone2 = Clafer("c0_ExamplePhone2").withCard(1, 1);
c1_display = c0_ExamplePhone2.addChild("c1_display").withCard(1, 1);
c0_OLED = c1_display.addChild("c0_OLED").withCard(1, 1);
c1_GSM = c0_ExamplePhone2.addChild("c1_GSM").withCard(1, 1);
c0_touchscreen = c0_ExamplePhone2.addChild("c0_touchscreen").withCard(1, 1);
c0_ExampleTablet1 = Clafer("c0_ExampleTablet1").withCard(1, 1);
c2_display = c0_ExampleTablet1.addChild("c2_display").withCard(1, 1);
c0_AMOLED = c2_display.addChild("c0_AMOLED").withCard(1, 1);
c0_HSPA = c0_ExampleTablet1.addChild("c0_HSPA").withCard(1, 1);
c1_CPU = c0_ExampleTablet1.addChild("c1_CPU").withCard(4, 4);
c1_touchscreen = c0_ExampleTablet1.addChild("c1_touchscreen").withCard(1, 1);
c0_ExamplePhone3 = Clafer("c0_ExamplePhone3").withCard(1, 1);
c3_display = c0_ExamplePhone3.addChild("c3_display").withCard(1, 1);
c1_LCD = c3_display.addChild("c1_LCD").withCard(1, 1);
c2_GSM = c0_ExamplePhone3.addChild("c2_GSM").withCard(1, 1);
c2_CPU = c0_ExamplePhone3.addChild("c2_CPU").withCard(4, 4);
c1_keyboard = c0_ExamplePhone3.addChild("c1_keyboard").withCard(1, 1);
c0_ExampleTablet2 = Clafer("c0_ExampleTablet2").withCard(1, 1);
c4_display = c0_ExampleTablet2.addChild("c4_display").withCard(1, 1);
c1_AMOLED = c4_display.addChild("c1_AMOLED").withCard(1, 1);
c1_HSPA = c0_ExampleTablet2.addChild("c1_HSPA").withCard(1, 1);
c3_CPU = c0_ExampleTablet2.addChild("c3_CPU").withCard(4, 4);
c2_keyboard = c0_ExampleTablet2.addChild("c2_keyboard").withCard(1, 1);
c5_display = c0_AndroidDevice1.addChild("c5_display").withCard(1, 1).withGroupCard(1, 1);
c2_LCD = c5_display.addChild("c2_LCD").withCard(0, 1);
c1_OLED = c5_display.addChild("c1_OLED").withCard(0, 1);
c2_AMOLED = c5_display.addChild("c2_AMOLED").withCard(0, 1);
c3_GSM = c0_AndroidDevice1.addChild("c3_GSM").withCard(1, 1);
c2_HSPA = c0_AndroidDevice1.addChild("c2_HSPA").withCard(0, 1);
c4_CPU = c0_AndroidDevice1.addChild("c4_CPU").withCard(1, 4);
c0_input = c0_AndroidDevice1.addChild("c0_input").withCard(1, 1).withGroupCard(1, 1);
c3_keyboard = c0_input.addChild("c3_keyboard").withCard(0, 1);
c2_touchscreen = c0_input.addChild("c2_touchscreen").withCard(0, 1);
c6_display = c0_AndroidDevice.addChild("c6_display").withCard(1, 1).withGroupCard(1, 1);
c3_LCD = c6_display.addChild("c3_LCD").withCard(0, 1);
c2_OLED = c6_display.addChild("c2_OLED").withCard(0, 1);
c3_AMOLED = c6_display.addChild("c3_AMOLED").withCard(0, 1);
c4_GSM = c0_AndroidDevice.addChild("c4_GSM").withCard(0, 1);
c3_HSPA = c0_AndroidDevice.addChild("c3_HSPA").withCard(0, 1);
c5_CPU = c0_AndroidDevice.addChild("c5_CPU").withCard(1, 4);
c1_input = c0_AndroidDevice.addChild("c1_input").withCard(1, 1).withGroupCard(1, 1);
c4_keyboard = c1_input.addChild("c4_keyboard").withCard(0, 1);
c3_touchscreen = c1_input.addChild("c3_touchscreen").withCard(0, 1);
c0_AndroidPhone4 = Clafer("c0_AndroidPhone4").withCard(1, 1).extending(c0_AndroidPhone);
c7_display = c0_AndroidPhone4.addChild("c7_display").withCard(1, 1);
c4_AMOLED = c7_display.addChild("c4_AMOLED").withCard(1, 1);
c5_GSM = c0_AndroidPhone4.addChild("c5_GSM").withCard(1, 1);
c4_HSPA = c0_AndroidPhone4.addChild("c4_HSPA").withCard(1, 1);
c6_CPU = c0_AndroidPhone4.addChild("c6_CPU").withCard(2, 2);
c2_input = c0_AndroidPhone4.addChild("c2_input").withCard(1, 1);
c4_touchscreen = c2_input.addChild("c4_touchscreen").withCard(1, 1);
c2_AMOLED.addConstraint(none(join(join(joinParent(joinParent($this())), c0_input), c3_keyboard)));
c0_AndroidPhone.addConstraint(some(join($this(), c4_GSM)));
c0_AndroidPhone.addConstraint(lessThan(card(join($this(), c5_CPU)), constant(4)));
c3_AMOLED.addConstraint(none(join(join(joinParent(joinParent($this())), c1_input), c4_keyboard)));