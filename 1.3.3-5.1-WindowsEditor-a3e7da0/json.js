const json = {
    "devices": [
        {
            "deviceName": "DESKTOP-TAT57NG",
            "instance": "DESKTOP-TAT57NG-9003B0944FBFBCBCFABF35ABD7FF72AD",
            "platform": "WindowsEditor",
            "oSVersion": "Windows 11 (22H2) [10.0.22621.1702] ",
            "model": "Default",
            "gPU": "NVIDIA GeForce RTX 3080",
            "cPUModel": "AMD Ryzen 9 7950X 16-Core Processor            ",
            "rAMInGB": 64,
            "renderMode": "SM5",
            "rHI": "",
            "appInstanceLog": ""
        }
    ],
    "reportCreatedOn": "2023.05.13-14.42.07",
    "succeeded": 24,
    "succeededWithWarnings": 0,
    "failed": 0,
    "notRun": 0,
    "inProcess": 0,
    "totalDuration": 13.010598182678223,
    "comparisonExported": false,
    "comparisonExportDirectory": "",
    "tests": [
        {
            "testDisplayName": "should have attributes initialized",
            "fullTestPath": "ComboGraph.Basics.should have attributes initialized",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.0358131006360054,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should setup world and such",
            "fullTestPath": "ComboGraph.Basics.should setup world and such",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.010849501937627792,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should decrease stamina on ability activation when playing first montage",
            "fullTestPath": "ComboGraph.Feature Testing.should decrease stamina on ability activation when playing first montage",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.12839239835739136,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogStaticMesh: Building static mesh SM_Cube_Weapon...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.50"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogSkeletalMesh: Waiting for skinned assets to be ready 0/1 (SK_Mannequin) ...",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.50"
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
            "deviceInstance": [],
            "duration": 0.012605499476194382,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "should setup world and such",
            "fullTestPath": "ComboGraph.Feature Testing.should setup world and such",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.012276198714971542,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "ComboGraph should be created",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.ComboGraph should be created",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.011490602046251297,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "EntryNode is created",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.ComboGraph.EntryNode is created",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.011602196842432022,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "FirstNode is created",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.ComboGraph.FirstNode is created",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.01085839793086052,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "GetCurrentNode()",
            "fullTestPath": "ComboGraph.Nodes.ComboGraph Task and Nodes API.Task / Node.UComboGraphAbilityTask_StartGraph.GetCurrentNode()",
            "state": "Success",
            "deviceInstance": [],
            "duration": 0.011303301900625229,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.51"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.51"
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
            "deviceInstance": [],
            "duration": 0.011901699006557465,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.51"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.51"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "Test against ComboGraphNodeEntry_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.51"
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
            "deviceInstance": [],
            "duration": 0.011592701077461243,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.52"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.52"
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
            "deviceInstance": [],
            "duration": 0.013150200247764587,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.52"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.52"
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
            "deviceInstance": [],
            "duration": 0.011896200478076935,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.52"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.52"
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
            "deviceInstance": [],
            "duration": 0.011814799159765244,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.52"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.52"
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
            "deviceInstance": [],
            "duration": 0.01165749877691269,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.53"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.53"
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
            "deviceInstance": [],
            "duration": 0.011570297181606293,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.53"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.53"
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
            "deviceInstance": [],
            "duration": 0.0137363001704216,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.53"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.53"
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
            "deviceInstance": [],
            "duration": 0.01216600090265274,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.53"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.53"
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
            "deviceInstance": [],
            "duration": 0.012194301933050156,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
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
            "deviceInstance": [],
            "duration": 0.011743798851966858,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: GetOwningAbility() GA_Combo_TestFixture_C_0",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
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
            "deviceInstance": [],
            "duration": 0.011614099144935608,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
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
            "deviceInstance": [],
            "duration": 0.011667899787425995,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: GetOwningTask() ComboGraphAbilityTask_StartGraph_14",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
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
            "deviceInstance": [],
            "duration": 0.012552101165056229,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: DispatchBeginPlay()",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "LogComboGraphTests: TryActivateAbilityByClass(GA_Combo_TestFixture_C)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.54"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        },
        {
            "testDisplayName": "F_ComboGraph_Test",
            "fullTestPath": "Project.Functional Tests.ComboGraphTests.FunctionalTests.Maps.F_ComboGraph_Map.F_ComboGraph_Test",
            "state": "Success",
            "deviceInstance": [],
            "duration": 12.596149444580078,
            "dateTime": "0001.01.01-00.00.00",
            "entries": [
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (0))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.58"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (1))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.41.59"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (2))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.42.00"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (3))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.42.03"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (4))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.42.04"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased by 10  (5))",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.42.06"
                },
                {
                    "event": {
                        "type": "Info",
                        "message": "F_ComboGraph_Test_2: Float assertion passed (Should have stamina decreased to 25 after 3 attacks)",
                        "context": "",
                        "artifact": "00000000000000000000000000000000"
                    },
                    "filename": "",
                    "lineNumber": -1,
                    "timestamp": "2023.05.13-12.42.07"
                }
            ],
            "warnings": 0,
            "errors": 0,
            "artifacts": []
        }
    ]
};