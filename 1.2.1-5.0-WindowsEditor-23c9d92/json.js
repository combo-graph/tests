const json = {
    "devices": [
        {
            "deviceName": "LENOVO",
            "instance": "LENOVO-3920",
            "platform": "WindowsEditor",
            "oSVersion": "Windows 11 (21H2) [10.0.22000.795] ",
            "model": "Default",
            "gPU": "NVIDIA GeForce RTX 3070 Laptop GPU",
            "cPUModel": "AMD Ryzen 7 5800H with Radeon Graphics         ",
            "rAMInGB": 64,
            "renderMode": "SM5",
            "rHI": ""
        }
    ],
    "reportCreatedOn": "2022.07.31-23.51.31",
    "succeeded": 24,
    "succeededWithWarnings": 0,
    "failed": 0,
    "notRun": 0,
    "inProcess": 0,
    "totalDuration": 32.27078628540039,
    "comparisonExported": false,
    "comparisonExportDirectory": "",
    "tests": [
        {
            "testDisplayName": "should have attributes initialized",
            "fullTestPath": "ComboGraph.Basics.should have attributes initialized",
            "state": "Success",
            "deviceInstance": "LENOVO-3920",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should setup world and such",
            "fullTestPath": "ComboGraph.Basics.should setup world and such",
            "state": "Success",
            "deviceInstance": "LENOVO-3920",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should decrease stamina on ability activation when playing first montage",
            "fullTestPath": "ComboGraph.Feature Testing.should decrease stamina on ability activation when playing first montage",
            "state": "Success",
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.50.51"
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
            "deviceInstance": "LENOVO-3920",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should setup world and such",
            "fullTestPath": "ComboGraph.Feature Testing.should setup world and such",
            "state": "Success",
            "deviceInstance": "LENOVO-3920",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "ComboGraph should be created",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.ComboGraph should be created",
            "state": "Success",
            "deviceInstance": "LENOVO-3920",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "EntryNode is created",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.ComboGraph.EntryNode is created",
            "state": "Success",
            "deviceInstance": "LENOVO-3920",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "FirstNode is created",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.ComboGraph.FirstNode is created",
            "state": "Success",
            "deviceInstance": "LENOVO-3920",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetCurrentNode()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphAbilityTask_StartGraph.GetCurrentNode()",
            "state": "Success",
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.50.57"
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
                    "timestamp": "2022.07.31-21.50.57"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.50.59"
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
                    "timestamp": "2022.07.31-21.50.59"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Test against ComboGraphNodeEntry_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "C:\\runners\\ComboGraph\\_work\\combo-graph\\combo-graph\\_work\\TP_Blank\\Plugins\\ComboGraphTests\\Source\\ComboGraphTests\\Private\\Tests\\ComboGraphNodes.spec.cpp",
                    "lineNumber": 138,
                    "timestamp": "2022.07.31-21.50.59"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.00"
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
                    "timestamp": "2022.07.31-21.51.00"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.01"
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
                    "timestamp": "2022.07.31-21.51.01"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.03"
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
                    "timestamp": "2022.07.31-21.51.03"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.04"
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
                    "timestamp": "2022.07.31-21.51.04"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.05"
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
                    "timestamp": "2022.07.31-21.51.05"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.07"
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
                    "timestamp": "2022.07.31-21.51.07"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.08"
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
                    "timestamp": "2022.07.31-21.51.08"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.09"
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
                    "timestamp": "2022.07.31-21.51.09"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.11"
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
                    "timestamp": "2022.07.31-21.51.11"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.12"
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
                    "timestamp": "2022.07.31-21.51.12"
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
                    "timestamp": "2022.07.31-21.51.12"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.13"
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
                    "timestamp": "2022.07.31-21.51.13"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.15"
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
                    "timestamp": "2022.07.31-21.51.15"
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
                    "timestamp": "2022.07.31-21.51.15"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.16"
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
                    "timestamp": "2022.07.31-21.51.16"
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
            "deviceInstance": "LENOVO-3920",
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
                    "timestamp": "2022.07.31-21.51.21"
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
                    "timestamp": "2022.07.31-21.51.22"
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
                    "timestamp": "2022.07.31-21.51.24"
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
                    "timestamp": "2022.07.31-21.51.27"
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
                    "timestamp": "2022.07.31-21.51.28"
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
                    "timestamp": "2022.07.31-21.51.29"
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
                    "timestamp": "2022.07.31-21.51.31"
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
                    "timestamp": "2022.07.31-21.51.31"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        }
    ]
};
