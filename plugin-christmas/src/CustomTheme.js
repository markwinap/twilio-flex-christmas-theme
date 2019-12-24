export default {
    baseName: "GreyDark",
    colors: {
        base0: "#011d2e",//d4d4d4
        base1: "#011d2e",
        base2: "#ff6565",
        base3: "#d4d4d4",
        base4: "#e0e0e0",
        base5: "#efefef",
        base6: "#ffffff",
        base7: "#e0e0e0",
        base8: "#e0e0e0",
        base9: "#e0e0e0",
        base10: "#e0e0e0",
        base11: "#e0e0e0",
        errorColor: "#CB3232",
        errorGlow: "rgba(234, 16, 16, 0.2)",
        buttonHoverColor: "rgba(0, 0, 0, 0.2)",
        tabSelectedColor: "#003b57",
        connectingColor: "#ff9800",
        disconnectedColor: "#c0192d",
        notificationBackgroundColorInformation: "#ffffff",
        notificationBackgroundColorSuccess: "#d0f4d1",
        notificationBackgroundColorWarning: "#ffe3b9",
        notificationBackgroundColorError: "#feced3",
        notificationIconColorError: "#d32f2f",
        notificationIconColorWarning: "#ea6c00",
        userAvailableColor: "#31aa71",
        userUnavailableColor: "#999999",
        defaultButtonColor: "#ff6565",
        lightTextColor: "#ffffff",
        darkTextColor: "#ff6565",
        disabledColor: "#d9dce4",
        focusColor: "#003b57",
        focusGlow: "rgba(25, 123, 221, 0.2)"
    },
    overrides: {
        MainHeader: {
            Container: {
                backgroundImage: `url("https://poc-marmarti-public.s3.amazonaws.com/traditional-knitting-pattern-ugly-1.jpg.png")`,
                color: "#ff6565",
                borderColor:"#ff6565",
                background: "transparent"
               // background: "#ff6565",//#003b57
            },
            Button: {
                color: "#ff6565"
            }

        },
        SideNav: {
            Container: {
                borderColor:"#ff6565",
                //backgroundImage: `url("https://image.freepik.com/free-vector/traditional-knitting-pattern-ugly-sweater_77032-294.jpg")`,
                background: "#011d2e"
            },
            Button: {
                //backgroundImage: `url("https://render.fineartamerica.com/images/rendered/default/print/8.000/8.000/break/images-medium-5/ugly-sweater-pattern-katyrr.jpg")`,
                borderColor:"#ff6565",
                background: "#011d2e"
            },
            Icon: {
                color: "#ff6565"
            },

        },

        UserActivityControls: {
            Item: {
                color: "#011d2e",
                //lightHover: false
            },
            Items: {
                background: "#ff6565",
            },
            Divider: {
                background: "#011d2e",
            }
        },
        TaskCardPlaceholder: {
            borderColor: "#ff6565"
        },
        TaskCard: {
            Container: {
                Default: {
                    borderColor: "#ff6565",
                    //lightHover: !lightTheme
                },
                Selected: {
                    borderColor: "#ff6565"
                },
                Hover: {
                    borderColor: "#ff6565"
                }
            },
            IconArea: {
                Default: {
                    color: "white"
                },
            },
            ContentArea: {
                Default: {
                    color: "white",
                    backgroundColor: "#011d2e"
                },
                Inactive: {
                    color: "white",
                    backgroundColor: "#011d2e"
                }
            }
        },
        TaskDetailsPanel: {
            Container: {
                background: "#011d2e",
                color: "white"
            },
            IconContainer: {
                color: "white"
            },
            SecondLine: {
                color: "white"
            }
        },

        TaskCanvas: {
            Container: {
                background: "#011d2e",
                color: "white"
            }
        },
        IncomingTaskCanvas: {
            AcceptTaskButton: {
                color: "#011d2e",
                background: "#54684C"
            },
            RejectTaskButton: {
                        color: "#011d2e",
                        background: "#cc5050"
            }
        },
        TaskCanvasHeader: {
            Container: {
                background: "#ff6565",
                color: "#011d2e"
            },
            WrapupTaskButton: {
                background: "#cc5050",
                color: "#011d2e",
            },
            EndTaskButton: {
                background: "#cc5050",
                color: "#011d2e",
            }
        },
        TaskInfoPanel: {
            Container: {
                color: "white",
            }
        },
        CallCanvas: {
            Button: {
                background: "#ff6565",
                color: "#011d2e"
            },
            HangUpButton: {
                background: "#cc5050",
                color: "#011d2e"
            },
        },
        TaskList: {
            Filter: {
                Container: {
                    //backgroundImage: `url("https://poc-marmarti-public.s3.amazonaws.com/traditional-knitting-pattern-ugly-1.jpg.png")`,
                    background: "#011d2e",
                    borderColor: "#ff6565"
                },
                EntryButton: {
                    color: "#ff6565"
                },
                Menu: {
                    Item: {
                        color: "#ff6565",
                        background: "#011d2e",
                        lightHover: "#022d47"
                    },
                    Items: {}
                }
            },
            Item: {
                Container: {
                    color: "#011d2e",
                    borderColor: "#022d47",
                    background: "#ff6565",
                    //lightHover: !lightTheme
                },
                Icon: {
                    color: "white",
                    background: "#cc5050",
                },
                SelectedContainer: {
                    background: "#ff6565",
                    color: "#011d2e",
                    //lightHover: !lightTheme
                },
                Buttons: {
                    DefaultButton: {
                        color: "#011d2e",
                        background: "#cc5050",
                        //lightHover: !lightTheme
                    },
                    AcceptButton: {
                        color: "#011d2e",
                        background: "#54684C"
                    },
                    RejectButton: {
                        color: "#011d2e",
                        background: "#cc5050"
                    }
                }
            },
        },
        NoTasksCanvas: {
            Container: {
                color: "white",
                background:"#002a3e",
                backgroundImage: `url("https://poc-marmarti-public.s3.amazonaws.com/traditional-knitting-pattern-ugly-1.jpg.png")`                
            },
            Hint: {
                color: "#FF8383"
            },
        },
        CRMContainer: {
            Container: {
                borderColor: "#ff6565",
                backgroundImage: `url("https://poc-marmarti-public.s3.amazonaws.com/traditional-knitting-pattern-ugly-1.jpg.png")`                
            },
            Placeholder: {
                Container: {
                    color: "white",
                    background: "#002a3e",
                    backgroundImage: `url("https://poc-marmarti-public.s3.amazonaws.com/traditional-knitting-pattern-ugly-1.jpg.png")`,

                },
                Icon: {
                    color: "white",
                },
                Button: {
                    background: "#ff6565",
                    color: "white"
                },
                Hint: {
                    color: "#FF8383"
                }
            }
        },
        UserCard: {
            AvatarContainer: {
                borderColor: "#003b57",
                background: "#003b57",
                color: "#ff6565"
            },
            AvailabilityContainer: {
                borderColor: "#003b57",
                background: "#cc5050",
                color: "#cc5050"
            }
        },
        AgentDesktopView: {
            Panel1: {
                background: "#003b57",
                backgroundImage: `url("https://poc-marmarti-public.s3.amazonaws.com/traditional-knitting-pattern-ugly-1.jpg.png")`                

            },
            Panel2: {
                background: "#003b57",
                backgroundImage: `url("https://poc-marmarti-public.s3.amazonaws.com/traditional-knitting-pattern-ugly-1.jpg.png")`                

            },
            ContentSplitter: {
                background: "#003b57",
                borderColor: "#ff6565",
                color: "#ff6565"
            }
        },
    }
}
