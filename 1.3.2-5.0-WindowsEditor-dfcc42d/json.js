const json = {
    "devices": [
        {
            "deviceName": "PC_MATERIEL_NET",
            "instance": "PC_MATERIEL_NET-22612",
            "platform": "WindowsEditor",
            "oSVersion": "Windows 10 (22H2) [10.0.19045.2251] ",
            "model": "Default",
            "gPU": "NVIDIA GeForce GTX 1660",
            "cPUModel": "AMD Ryzen 7 2700X Eight-Core Processor         ",
            "rAMInGB": 64,
            "renderMode": "SM5",
            "rHI": ""
        }
    ],
    "reportCreatedOn": "2022.11.17-21.17.03",
    "succeeded": 24,
    "succeededWithWarnings": 0,
    "failed": 0,
    "notRun": 0,
    "inProcess": 0,
    "totalDuration": 35.43301773071289,
    "comparisonExported": false,
    "comparisonExportDirectory": "",
    "tests": [
        {
            "testDisplayName": "should have attributes initialized",
            "fullTestPath": "ComboGraph.Basics.should have attributes initialized",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should setup world and such",
            "fullTestPath": "ComboGraph.Basics.should setup world and such",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should decrease stamina on ability activation when playing first montage",
            "fullTestPath": "ComboGraph.Feature Testing.should decrease stamina on ability activation when playing first montage",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "Waiting for skeletal meshes to be ready 0/1 (SK_Mannequin) ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Engine\\Private\\SkeletalMeshCompiler.cpp",
                    "lineNumber": 323,
                    "timestamp": "2022.11.17-20.16.23"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should have attributes initialized",
            "fullTestPath": "ComboGraph.Feature Testing.should have attributes initialized",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should setup world and such",
            "fullTestPath": "ComboGraph.Feature Testing.should setup world and such",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "ComboGraph should be created",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.ComboGraph should be created",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "EntryNode is created",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.ComboGraph.EntryNode is created",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "FirstNode is created",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.ComboGraph.FirstNode is created",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetCurrentNode()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphAbilityTask_StartGraph.GetCurrentNode()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.29"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.29"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetPreviousNode()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphAbilityTask_StartGraph.GetPreviousNode()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.30"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.30"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Test against ComboGraphNodeEntry_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "E:\\runners\\ComboGraph\\_work\\combo-graph\\combo-graph\\_work\\TP_Blank\\Plugins\\ComboGraphTests\\Source\\ComboGraphTests\\Private\\Tests\\ComboGraphNodes.spec.cpp",
                    "lineNumber": 141,
                    "timestamp": "2022.11.17-20.16.30"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "first node should be anim based",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.first node should be anim based",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.31"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.31"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetAnimationAsset()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetAnimationAsset()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.32"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.32"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetAnimationClass()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetAnimationClass()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.33"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.33"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetAvatarActor()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetAvatarActor()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.35"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.35"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetAvatarAsCharacter()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetAvatarAsCharacter()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.36"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.36"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetAvatarAsPawn()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetAvatarAsPawn()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.37"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.37"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetChildren()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetChildren()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.39"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.39"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetNodeTitle()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetNodeTitle()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.40"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.40"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetOwnerActor()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetOwnerActor()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.41"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.41"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetOwningAbility()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetOwningAbility()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.42"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.42"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "GetOwningAbility() GA_Combo_TestFixture_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2012,
                    "timestamp": "2022.11.17-20.16.43"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetOwningGraph()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetOwningGraph()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.44"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.44"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetOwningTask()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetOwningTask()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.45"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.45"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "GetOwningTask() ComboGraphAbilityTask_StartGraph_14",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2012,
                    "timestamp": "2022.11.17-20.16.45"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetPreviousNode()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphNodeAnimBase.GetPreviousNode()",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.46"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Source\\Runtime\\Core\\Public\\Misc\\AutomationTest.h",
                    "lineNumber": 2047,
                    "timestamp": "2022.11.17-20.16.46"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_ComboGraph_Test",
            "fullTestPath": "Project.Functional Tests./ComboGraphTests/FunctionalTests/Maps/F_ComboGraph_Map.F_ComboGraph_Test",
            "state": "Success",
            "deviceInstance": "PC_MATERIEL_NET-22612",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (0))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1324,
                    "timestamp": "2022.11.17-20.16.52"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (1))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1324,
                    "timestamp": "2022.11.17-20.16.53"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (2))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1324,
                    "timestamp": "2022.11.17-20.16.55"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (3))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1324,
                    "timestamp": "2022.11.17-20.16.58"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (4))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1324,
                    "timestamp": "2022.11.17-20.16.59"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (5))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1324,
                    "timestamp": "2022.11.17-20.17.01"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased to 25 after 3 attacks)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1324,
                    "timestamp": "2022.11.17-20.17.02"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: ",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "D:\\build\\++UE5\\Sync\\Engine\\Intermediate\\Build\\Win64\\UnrealEditor\\Inc\\FunctionalTesting\\FunctionalTest.gen.cpp",
                    "lineNumber": 1150,
                    "timestamp": "2022.11.17-20.17.02"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        }
    ]
};
